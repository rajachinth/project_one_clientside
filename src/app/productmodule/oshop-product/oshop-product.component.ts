import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Observable, of } from 'rxjs';
import { InternalServerError, ApplicationError } from 'src/app/sharedmodule/global errors/applicationerrors';
import { ProductCard } from 'src/app/sharedmodule/models/product-card';
import { ProductformService } from 'src/app/sharedmodule/services/productform.service';
import { ShoppingcartService } from 'src/app/sharedmodule/services/shoppingcart.service';
import { UserService } from 'src/app/sharedmodule/services/userservice.service';
import { ADDCART, ADDTOKENAUTH, DELETECART } from 'src/app/storemodule/redux/coreaction';
import { RootStoreState } from 'src/app/storemodule/redux/corestore';


@Component({
  selector: 'oshop-dialog-menu',
  templateUrl: './oshop-dialog-menu.html',
  styleUrls: ['./oshop-dialog-menu.css']
})
export class OshopDialogBox {

  $dialogError: Observable<any>;
  defaultToken: string;
  @select(value => value.logstate.show) $logState: Observable<object>;


  constructor(public dialogRef: MatDialogRef<OshopDialogBox>,
              private ngRedux: NgRedux<RootStoreState>,
              private userService: UserService) { document.body.scrollTop = 0; }

  No_Login() {
    this.userService.getDefaultUserService()
            .subscribe((responseData) => {
              this.defaultToken = responseData;
              this.ngRedux.dispatch({type: ADDTOKENAUTH, data: this.defaultToken});
            },
            (error) => {
              this.$dialogError = of('something went wrong');
            },
            () => {
              try {   localStorage.setItem('authToken', this.defaultToken); } catch(e) {console.log(e)};
              this.dialogRef.close(true);
            });
  }
  Yes_Login() {
    this.dialogRef.close(false);
  }
}

@Component({
  selector: 'app-oshop-product',
  templateUrl: './oshop-product.component.html',
  styleUrls: ['./oshop-product.component.css']
})
export class OshopProductComponent implements OnInit {

  itemDetails: ProductCard[] = [{
    isItemAdded: false,
    itemCount: 0
  }];

  @select(value => value.logstate.show) $logState: Observable<object>;
  @select(value => value.logstate.addItemsToCart) $addItemsToCart: Observable<object>;
  @select(value => value.logstate.deleteItemsFromCart) $deleteItemsFromCart: Observable<object>;
  @select(value => value.logstate.moveCart) $moveCart: Observable<object>;

  showData: Boolean;
  productID: String;
  dataObj: Object;

  productImageOption: NgxGalleryOptions[];
  productImage: NgxGalleryImage[];
  galleryImage = [];
  productQuantity: Object = null;
  selectedQuantity: Boolean;
  noProductVarient: Boolean;
  yesProductVarient: Boolean;
  showProductDetails: Boolean;
  noVarientSelected: Boolean;
  productDetails: any;
  $serviceError: Observable<Boolean>;
  $serviceErrorMessage: Observable<String>;

  isUserLogged: Boolean;
  defaultToken: string;


  constructor(private routestate: ActivatedRoute,
              private shoppingCartService: ShoppingcartService,
              private route: Router,
              private dialog: MatDialog,
              private ngRedux: NgRedux<RootStoreState>,
              private productService: ProductformService) {
    document.body.scrollTop = 0;
    this.isUserLogged = this.ngRedux.getState().loginstate.isUserLogged;
  }

  ngOnInit() {
    this.productID = this.routestate.snapshot.paramMap.get('productID');
    this.productService
            .getProductID_Details(this.productID)
            .subscribe( data => { this.productDetails = data[0];
              // console.log(this.productDetails);
            },
            (error) => {
              this.$serviceError = of(true);
              if (error instanceof InternalServerError) { return this.$serviceErrorMessage = of('internal server error'); }
              if (error instanceof ApplicationError) { return this.$serviceErrorMessage = of('unknow error'); }},
              () => {

                this.dataObj = {
                        productID: this.productID,
                        product: this.productDetails.product,
                        price: this.productDetails.varients.price,
                        imageURL: this.productDetails.thumbnailImage,
                      };

                this.productImage = [
                    {
                      small: this.productDetails.productImages[0].img,
                      medium: this.productDetails.productImages[0].img,
                      big: this.productDetails.productImages[0].img,
                    },
                    {
                      small: this.productDetails.productImages[1].img,
                      medium: this.productDetails.productImages[1].img,
                      big: this.productDetails.productImages[1].img,
                    },
                    {
                      small: this.productDetails.productImages[2].img,
                      medium: this.productDetails.productImages[2].img,
                      big: this.productDetails.productImages[2].img,
                    },
                    {
                      small: this.productDetails.productImages[3].img,
                      medium: this.productDetails.productImages[3].img,
                      big: this.productDetails.productImages[3].img,
                    },
                  ];

                this.productImageOption = [
                  {
                    imageArrows: true,
                    thumbnailsArrows: true,
                    width: '100%',
                    height: '400px',
                    previewCloseOnClick: true,
                    previewCloseOnEsc: true ,
                    thumbnailsColumns: 4,
                    imageAnimation: NgxGalleryAnimation.Slide
                  },
                  { breakpoint: 400, width: '100%', height: '300px', thumbnailsColumns: 4 }
              ];

                this.showProductDetails = true;
                this.showData = true;
              });
  }

  addQuantity(data) {
    this.selectedQuantity = true;
    this.noProductVarient = false;
    this.yesProductVarient = true;
    this.productQuantity = data;
    this.noVarientSelected = false;
  }
  deleteQuantity() {
    this.yesProductVarient = false;
    this.noProductVarient = false;
    this.selectedQuantity = false;
    this.productQuantity = null;
    this.noVarientSelected = false;
  }
  blankButton() {
    this.noProductVarient = true;
    this.yesProductVarient = false;
  }
  isQuantitySelected() {
    if (this.productQuantity) {
      this.noVarientSelected = false;
      this.checkLoginStatus();
    } else {
      this.noVarientSelected = true;
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(OshopDialogBox, { width: '90%', minWidth: '90%' });

    dialogRef.afterClosed().subscribe(logindata => {
      if (logindata) {
        this.addToCart();
      } else {
      if (!confirm('You\'ll be redirected to login page ?')) { return; }
      const routerURL = this.route.routerState.snapshot.url;
      return this.route.navigate(['/login'], {queryParams: {shoppingCartURL: routerURL}});
      }
    });
  }

  checkLoginStatus() {
    // console.log(this.isUserLogged);
    if (!this.isUserLogged) { this.openDialog(); } else { this.addToCart(); }
  }

  addToCart() {
  this.shoppingCartService.addCartItems(this.dataObj)
                            .subscribe((v) => {},
                            (error) => {
                              // console.log(error);
                            },
                            () => {
                              this.ngRedux.dispatch({type: ADDCART, data: this.dataObj});
                              this.itemDetails = this.shoppingCartService.itemDetails(this.productID); }
                            );
  }
  deleteFromcart() {
    this.shoppingCartService.deleteCartItems(this.dataObj)
                            .subscribe((v) => {},
                                                (error) => {
                                                  // console.log(error);
                                                },
                                                () => {
                                                  this.ngRedux.dispatch({type: DELETECART, data: this.dataObj});
                                                  this.itemDetails = this.shoppingCartService.itemDetails(this.productID);
                                                });

  }

}

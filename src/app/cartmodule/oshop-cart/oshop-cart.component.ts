import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BadRequestError, NotFounfError, InternalServerError, ApplicationError } from 'src/app/sharedmodule/global errors/applicationerrors';
import { AuthserviceService } from 'src/app/sharedmodule/services/authservice.service';
import { CartorderService } from 'src/app/sharedmodule/services/cartorder.service';
import { ShoppingcartService } from 'src/app/sharedmodule/services/shoppingcart.service';
import { ADDCART, DELETECART } from 'src/app/storemodule/redux/coreaction';
import { RootStoreState } from 'src/app/storemodule/redux/corestore';


@Component({
  selector: 'app-oshop-cart',
  templateUrl: './oshop-cart.component.html',
  styleUrls: ['./oshop-cart.component.css']
})
export class OshopCartComponent {

  @select(element => element.cartstate) $cartState;
  @select(value => value.logstate.show) $logState: Observable<object>;
  @select(value => value.logstate.addItemsToCart) $addItemsToCart: Observable<object>;
  @select(value => value.logstate.deleteItemsFromCart) $deleteItemsFromCart: Observable<object>;
  @select(value => value.logstate.moveCart) $moveCart: Observable<object>;

  $errorCheck: Observable<any>;
  $errorStatus: Observable<any>;

  constructor(private cartService: CartorderService,
              private shoppingCartService: ShoppingcartService,
              private authservice: AuthserviceService,
              private ngRedux: NgRedux<RootStoreState>) { document.body.scrollTop = 0; }

  addToCart(itemList) {
    // console.log(itemList);
    this.shoppingCartService.addCartItems(itemList)
                            .subscribe((v) => {},
                            (error) => {
                              this.$errorCheck = of(true);
                              if (error instanceof BadRequestError) { return this.$errorStatus = of('uniqueID or password is wrong'); }
                              if (error instanceof NotFounfError) { return this.$errorStatus = of('uniqueID or password is wrong'); }
                              if (error instanceof InternalServerError) { return this.$errorStatus = of('internal server error'); }
                              if (error instanceof ApplicationError) { return this.$errorStatus = of('unknow error'); }
                            },
                            () => {
                              this.ngRedux.dispatch({type: ADDCART, data: itemList});
                            });
  }
  deleteFromcart(itemList) {
    this.shoppingCartService.deleteCartItems(itemList)
                            .subscribe((v) => {},
                            (error) => {
                              this.$errorCheck = of(true);
                              if (error instanceof BadRequestError) { return this.$errorStatus = of('uniqueID or password is wrong'); }
                              if (error instanceof NotFounfError) { return this.$errorStatus = of('uniqueID or password is wrong'); }
                              if (error instanceof InternalServerError) { return this.$errorStatus = of('internal server error'); }
                              if (error instanceof ApplicationError) { return this.$errorStatus = of('unknow error'); }
                            },
                            () => {
                            this.ngRedux.dispatch({type: DELETECART, data: itemList});
                            });
  }
  clearCart() {
    this.cartService.clearCart();
  }

}

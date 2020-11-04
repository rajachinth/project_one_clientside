import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { InternalServerError, ApplicationError } from 'src/app/sharedmodule/global errors/applicationerrors';
import { ProductformService } from 'src/app/sharedmodule/services/productform.service';


@Component({
  selector: 'app-oshop-home',
  templateUrl: './oshop-home.component.html',
  styleUrls: ['./oshop-home.component.css']
})
export class OshopHomeComponent implements OnInit {

  @select(value => value.logstate.shoppingServer) $logState: Observable<object>;
  searchValue = '';
  showCategoryData: Boolean;
  showProductsData: Boolean;
  productList = [];
  filterProductList: {}[] = [];
  categoryParamsValue;
  subsciption: Subscription;
  categoryList;

  $showSpinnerCategory: Observable<Boolean>;
  $ErrorCategory: Observable<Boolean>;
  $showErrorCategory: Observable<String>;
  $showSpinnerProducts: Observable<Boolean>;
  $ErrorProducts: Observable<Boolean>;
  $showErrorProducts: Observable<String>;

  constructor(private routerState: ActivatedRoute,
              private productService: ProductformService,
              ) { }

  ngOnInit() {
       this.$ErrorCategory = of(false);
       this.$ErrorProducts = of(false);
       this.$showSpinnerCategory = of(true);
       this.$showSpinnerProducts = of(true);

       this.subsciption = this.productService
                            .getProductValues()
                            .pipe(switchMap((productItem) => {
                              this.productList = productItem;
                              // console.log(this.productList);
                              return this.routerState.queryParamMap;
                            }))
                              .subscribe((paramState => {
                                this.categoryParamsValue = paramState.get('id');
                                // console.log(this.categoryParamsValue);
                                this.filterProductList = (this.categoryParamsValue) ?
                                this.productList.filter(item => item.categoryID == this.categoryParamsValue)
                                : this.productList;
                                this.$showSpinnerProducts = of(false);
                                this.showProductsData = true;
                          }),
                          (error) => {
                            this.$ErrorProducts = of(true);
                            this.$showSpinnerProducts = of(false);
                            if (error instanceof InternalServerError) { return this.$showErrorProducts = of('internal server error'); }
                            if (error instanceof ApplicationError) { return this.$showErrorProducts = of('unknow error'); }},
                            () => { /*this block wont execute in observable of type "Params" */ });
       this.subsciption = this.productService
                            .getDropDownValues()
                            .subscribe(v => {this.categoryList = v;
                              // console.log(this.categoryList);
                            },
                            (error) => {
                              this.$showSpinnerCategory = of(false);
                              this.$ErrorCategory = of(true);
                              if (error instanceof InternalServerError) { return this.$showErrorCategory = of('internal server error'); }
                              if (error instanceof ApplicationError) { return this.$showErrorCategory = of('unknow error'); }},
                              () => {
                              this.$showSpinnerCategory = of(false);
                              this.showCategoryData = true;
                              });
  }
  onclickEvent(event) {
    // console.log(event);
  }
}

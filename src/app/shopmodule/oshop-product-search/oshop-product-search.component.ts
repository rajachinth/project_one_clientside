import { select } from '@angular-redux/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { InternalServerError, ApplicationError } from 'src/app/sharedmodule/global errors/applicationerrors';
import { AdminProducts } from 'src/app/sharedmodule/models/admin-products';
import { ProductformService } from 'src/app/sharedmodule/services/productform.service';


@Component({
  selector: 'app-oshop-product-search',
  templateUrl: './oshop-product-search.component.html',
  styleUrls: ['./oshop-product-search.component.css']
})
export class OshopProductSearchComponent implements OnInit, OnDestroy {

  searchKey: any;
  $productLists: Observable<Object>;
  productLists: AdminProducts[];
  filterLists: any[];
  subscription: Subscription;
  $showData: Observable<Boolean> = of(false);

  @select(value => value.logstate.shoppingServer) $logState: Observable<object>;

  $errorStatusProducts: Observable<String>;
  $errorCheck: Observable<Boolean>;

  constructor(private routerState: ActivatedRoute,
              private productService: ProductformService) {

  }

  ngOnInit() {

    this.$errorCheck = of(false);
    this.subscription = this.productService.getProductValues()
                          .subscribe((productValue: any) => {
                            // console.log(productValue);
                            this.filterLists = this.productLists = productValue; },
                          (error) => {
                            this.$errorCheck = of(true);
                            if (error instanceof InternalServerError) { return this.$errorStatusProducts = of('internal server error'); }
                            if (error instanceof ApplicationError) { return this.$errorStatusProducts = of('unknow error'); }
                          },
                          () => {
                            this.searchKey = this.routerState.snapshot.queryParams;
                            // console.log(this.searchKey.searchKey);
                            this.filterLists = (this.searchKey.searchKey) ?
                                                  this.productLists.filter(productValue =>
                                                  productValue.product.toLowerCase().includes(this.searchKey.searchKey.toLowerCase()))
                                                  : null;
                            this.$showData = of(true);
                          });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

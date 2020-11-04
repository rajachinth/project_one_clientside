import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import * as $ from 'jQuery';
import { InternalServerError, ApplicationError } from '../../global errors/applicationerrors';
import { ProductformService } from '../../services/productform.service';


@Component({
  selector: 'app-o-shop-carousel',
  templateUrl: './o-shop-carousel.component.html',
  styleUrls: ['./o-shop-carousel.component.css']
})
export class OShopCarouselComponent implements OnInit {

  $ErrorCategory: Observable<any>;
  $ErrorProducts: Observable<any>;
  $showSpinnerCategory: Observable<any>;
  $showSpinnerProducts: Observable<any>;
  subsciption: Subscription;
  productList = [];
  filterList = [];
  showProductsData: boolean;
  $showErrorProducts: Observable<string>;


  constructor(private productService: ProductformService, ) { }

  ngOnInit() {
    this.$ErrorCategory = of(false);
    this.$ErrorProducts = of(false);
    this.$showSpinnerCategory = of(true);
    this.$showSpinnerProducts = of(true);


    this.subsciption = this.productService.getProductValues()
                           .subscribe((productItem => {
                            this.productList = productItem;
                            let count = 0;
                            while (count < this.productList.length) {
                              this.filterList = this.filterList.concat(this.productList[count]);
                              count += 2;
                            }
                            this.$showSpinnerProducts = of(false);
                            this.showProductsData = true;
                       }),
                       (error) => {
                         this.$ErrorProducts = of(true);
                         this.$showSpinnerProducts = of(false);
                         if (error instanceof InternalServerError) { return this.$showErrorProducts = of('internal server error'); }
                         if (error instanceof ApplicationError) { return this.$showErrorProducts = of('unknow error'); }},
                         () => {
                          // $(document).ready(function() {
                          //   // console.log('jquery element click');
                          //   $('.jquery_ID011').trigger('click');
                          // });
                          document.getElementById('jquery_ID011').click();
                          });
  }
  scroll() {
    document.body.scrollTop = 0;
  }
}

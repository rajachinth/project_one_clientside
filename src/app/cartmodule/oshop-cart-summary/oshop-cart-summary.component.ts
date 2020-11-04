import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { Observable, of } from 'rxjs';
import { BadRequestError, NotFounfError, InternalServerError, ApplicationError } from 'src/app/sharedmodule/global errors/applicationerrors';
import { CartorderService } from 'src/app/sharedmodule/services/cartorder.service';
import { ShoppingcartService } from 'src/app/sharedmodule/services/shoppingcart.service';
import { SyncValidationCheck } from 'src/app/sharedmodule/validators/sync-validation.component';
import { ADDORDER } from 'src/app/storemodule/redux/coreaction';
import { RootStoreState } from 'src/app/storemodule/redux/corestore';

@Component({
  selector: 'app-oshop-cart-summary',
  templateUrl: './oshop-cart-summary.component.html',
  styleUrls: ['./oshop-cart-summary.component.css']
})
export class OshopCartSummaryComponent implements OnInit {
  orderForm;
  orderSummary;
  orderDetails;
  @select(element => element.cartstate) $cartstate;
  @select(value => value.logstate.show) $logState: Observable<object>;

  $errorCheck: Observable<any>;
  $errorStatus: Observable<any>;

  constructor(formBuilder: FormBuilder,
              private orderService: CartorderService,
              private ngRedux: NgRedux<RootStoreState>,
              private route: Router,
              private shoppingCart: ShoppingcartService) {
    this.orderForm = formBuilder.group({
      name: formBuilder.control('', [Validators.required,
                                  Validators.minLength(4),
                                  Validators.maxLength(15),
                                  SyncValidationCheck.noSpecialCharcterValidation]),
      address: formBuilder.control('', [
                                  Validators.required,
                                  Validators.maxLength(50)]),
      pincode: formBuilder.control('', Validators.required),
      mobile: formBuilder.control('', Validators.required) });
   }

   ngOnInit() {
    this.shoppingCart.getCartSummary()
                     .subscribe((data: any) => {
                      this.orderSummary = {totalItemCount: data.totalItemsCount, totalItemCost: data.totalItemsCost};
                     });
  }
  confirmOrder(CustomerDetails, orderDetails) {
    this.$errorCheck = of(false);
    const orderID = uuidv4();
    const orderSummary = this.orderSummary;
    this.orderService.addOrderCart(orderID, CustomerDetails, orderDetails, orderSummary)
        .subscribe((v) => {},
        (error) => {
          this.$errorCheck = of(true);
          if (error instanceof BadRequestError) { return this.$errorStatus = of('invalid data entered'); }
          if (error instanceof NotFounfError) { return this.$errorStatus = of('invalid data entered'); }
          if (error instanceof InternalServerError) { return this.$errorStatus = of('internal server error'); }
          if (error instanceof ApplicationError) { return this.$errorStatus = of('unknow error'); }
        },
        () => {
          this.ngRedux.dispatch({type: ADDORDER, data: {cartorderID: orderID, CustomerDetails, orderDetails}});
          this.orderService.clearCart();
          this.route.navigate(['/order/success'], {queryParams: {customerOrderID: orderID}});
        });
  }

}

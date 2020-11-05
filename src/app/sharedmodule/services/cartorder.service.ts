import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { HttpClient } from '@angular/common/http';
import { AuthserviceService } from './authservice.service';
import { CLEARCART, DELETEORDER } from 'src/app/storemodule/redux/coreaction';
import { RootStoreState } from 'src/app/storemodule/redux/corestore';

@Injectable({
  providedIn: 'root'
})
export class CartorderService {

  constructor(private ngRedux: NgRedux<RootStoreState>,
              private http: HttpClient,
              private jwtService: AuthserviceService) {}

  addOrderCart(cartorderID, CustomerDetails, orderDetails, cartSummary) {
    const decodeData = this.jwtService.decodeToken();
    const obj = {userID: decodeData.uniqueID, orderID: cartorderID, productDetails: orderDetails.productItem,
            shipmentDetails: CustomerDetails, orderSummary: cartSummary};
    // console.log(obj);
    return this.http.post('https://vinayakatradergroup.herokuapp.com/order/addOrder', obj);
  }
  clearCart() {
    const decodeData = this.jwtService.decodeToken();
    const obj = {userID: decodeData.uniqueID};
    // console.log(obj);
    this.http.post('https://vinayakatradergroup.herokuapp.com/shoppingCart/clearCart', obj)
             .subscribe((v) => {},
             (error) => {
              //  console.log(error);
              },
             () => {this.ngRedux.dispatch({type: CLEARCART}); });
  }
  deleteOrderCart(CartorderID) {
    const decodeData = this.jwtService.decodeToken();
    const obj = {userID: decodeData.uniqueID, orderID: CartorderID};
    // console.log(obj);
    if (!confirm('Is this order to be deleted ?')) { return; }
    this.http.post('https://vinayakatradergroup.herokuapp.com/order/deleteOrder', obj)
             .subscribe((v) => {},
             (error) => {
              //  console.log(error);
               },
             () => {this.ngRedux.dispatch({type: DELETEORDER, data: {orderID: CartorderID}}); });
    // console.log(this.ngRedux.getState().orderstate);
  }
}

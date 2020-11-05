import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { Subscription, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthserviceService } from './authservice.service';
import { RootStoreState } from 'src/app/storemodule/redux/corestore';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService implements OnDestroy {
  cartItemTracker: any[];
  subscription: Subscription;
  totalCartValue: any;
  filterCartValue: any;
  filterSort: any[];
  iteration = 0;

  constructor(private ngRedux: NgRedux<RootStoreState>, private http: HttpClient,
              private jwtService: AuthserviceService) {
    this.ngRedux.subscribe(() => {
        this.cartItemTracker = this.ngRedux.getState().cartstate.productItem;
      });
  }
  userEditService(userdata) {
    const decodeData = this.jwtService.decodeToken();
    // console.log(decodeData.uniqueID);
    const obj = {id: decodeData.uniqueID};
    const dataObj = Object.assign({}, userdata, obj);
    // console.log(dataObj);
    return this.http.post('https://vinayakatradergroup.herokuapp.com/edituser', dataObj, {responseType: 'json'});
  }
  getUserDetailsService() {
    const decodeData = this.jwtService.decodeToken();
    // console.log(decodeData.uniqueID);
    const obj = {uniqueID: decodeData.uniqueID};
    return this.http.post('https://vinayakatradergroup.herokuapp.com/authentication/login/getuser-details', obj, {responseType: 'json'});
  }
  getCartSummary() {
    const decodeData = this.jwtService.decodeToken();
    // console.log(decodeData.uniqueID);

    const obj = {userID: decodeData.uniqueID};
    return this.http.post('https://vinayakatradergroup.herokuapp.com/shoppingCart/summary', obj);
  }
  addCartItems(cartList) {
    const decodeData = this.jwtService.decodeToken();
    console.log(decodeData);

    // console.log(decodeData.uniqueID);
    const obj = {userID: decodeData.uniqueID, productID: cartList.productID, product: cartList.product,
            price: cartList.price, imageURL: cartList.imageURL};
    // console.log(obj);
    return this.http.post('https://vinayakatradergroup.herokuapp.com/shoppingCart/addItem', obj);
  }
  deleteCartItems(cartList) {
    const decodeData = this.jwtService.decodeToken();
    // console.log(decodeData.uniqueID);
    const obj = {userID: decodeData.uniqueID, productID: cartList.productID, product: cartList.product,
            price: cartList.price, imageURL: cartList.imageURL};
    // console.log(obj);
    return this.http.post('https://vinayakatradergroup.herokuapp.com/shoppingCart/deleteItem', obj);
  }
  getJSONData() {
    if (this.jwtService.loginStatus()) {
      const decodeData = this.jwtService.decodeToken();
      // console.log(decodeData.userID);
      const obj = {uniqueID: decodeData.userID};
      return this.http.post('https://vinayakatradergroup.herokuapp.com/ecommerce/userData/populate', obj);
    }
    return of({error: 'please login to view the user JSON data'});
  }
  itemDetails(itemID) {
    // console.log(this.cartItemTracker);
    // console.log(itemID);
    this.filterSort = this.cartItemTracker.filter((element) => {
    if (element.productID == itemID) {
        this.iteration = this.iteration + 1;
        this.filterCartValue = [{ isItemAdded: true, itemCount: element.itemCount}];
        return element;
      }});

    if (this.filterSort.length == 0) {
      return [{isItemAdded: false, itemCount: 0}];
    } else {
      return this.filterCartValue;
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

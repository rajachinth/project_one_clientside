import { select, NgRedux } from '@angular-redux/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { BadRequestError, NotFounfError, InternalServerError, ApplicationError } from 'src/app/sharedmodule/global errors/applicationerrors';
import { AuthserviceService } from 'src/app/sharedmodule/services/authservice.service';
import { ShoppingcartService } from 'src/app/sharedmodule/services/shoppingcart.service';
import { UserService } from 'src/app/sharedmodule/services/userservice.service';
import { ADDTOKENAUTH, RESTORECART, USERDATA } from 'src/app/storemodule/redux/coreaction';
import { RootStoreState } from 'src/app/storemodule/redux/corestore';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {

  show: Boolean = false;
  $showLabel: Observable<Boolean>;
  @select(value => value.logstate.show) $logState: Observable<object>;
  @select(value => value.loginstate.username) $username: Observable<object>;
  $errorStatus: Observable<String>;
  $errorCheck: Observable<Boolean>;
  decodedData;
  stateChange = 'animationStateOne';
  cartSummary: any;

  $timeout: Observable<Boolean>;

  constructor(private authservice: AuthserviceService,
              private ngRedux: NgRedux<RootStoreState>,
              private userService: UserService,
              private route: Router,
              private routerState: ActivatedRoute,
              private shoppingService: ShoppingcartService) {}

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }
  ngOnInit() {
   if (this.routerState.snapshot.queryParamMap.has('shoppingCartURL') ||
      this.routerState.snapshot.queryParamMap.has('requestbackURL')) {
      this.$showLabel = of(true);
    }
  }

  logIn(userData) {
    this.$errorCheck = of(false);
    this.$timeout = of(true);
    // console.log(userData);
    this.userService.userPostService(userData)
        .pipe(take(1))
        .subscribe((responseData: any) => {
          const authToken: string = responseData.toString();
          try {  localStorage.setItem('authToken', authToken); } catch (e) {console.log(e); }
          console.log('dispatchh');
          this.ngRedux.dispatch({type: ADDTOKENAUTH, data: authToken});
          this.decodedData = this.authservice.decodeToken();
          // console.log(this.decodedData);
        },
        (error) => {
          this.$errorCheck = of(true);
          this.$timeout = of(false);
          if (error instanceof BadRequestError) { return this.$errorStatus = of('uniqueID or password is wrong'); }
          if (error instanceof NotFounfError) { return this.$errorStatus = of('uniqueID or password is wrong'); }
          if (error instanceof InternalServerError) { return this.$errorStatus = of('internal server error'); }
          if (error instanceof ApplicationError) { return this.$errorStatus = of('unknow error'); }
        },
        () => {

          this.shoppingService.getCartSummary()
                              .subscribe((data: any) => {
                                this.cartSummary = {totalCount: data.totalItemsCount, totalCost: data.totalItemsCost};
                              });
          this.shoppingService.getJSONData()
                .subscribe((data: any) => {
                  const cartDetails = {
                    productItem: [].concat(data.DB_Populate.shoppingdetails.productDetails),
                    totalItemsCost: this.cartSummary.totalCost,
                    totalItemsCount: this.cartSummary.totalCount
                  };
                  this.ngRedux.dispatch({type: RESTORECART, data: {cartList: cartDetails.productItem,
                    itemCount: cartDetails.totalItemsCount, itemCost: cartDetails.totalItemsCost}});
                  });
          this.ngRedux.dispatch({type: USERDATA, data: this.decodedData});

          setTimeout(() => {
            this.routerState.queryParamMap
            .pipe(take(1))
            .subscribe(queryKey => {
                if (queryKey.has('requestbackURL')) {
                  this.route.navigate([queryKey.get('requestbackURL')], {queryParams: {user: this.decodedData.name}});
                }
                if (queryKey.has('shoppingCartURL')) {
                  this.route.navigate([queryKey.get('shoppingCartURL')], {queryParams: {user: this.decodedData.name}});
                } else {
                  this.route.navigate(['/home'], {queryParams: {user: this.decodedData.name}});
                }
              });
          }, 5000);

          });
      }

  showKey() {
    this.show = !this.show;
  }

}

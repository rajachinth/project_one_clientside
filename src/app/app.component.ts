import { NgRedux, select } from '@angular-redux/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { AuthserviceService } from './sharedmodule/services/authservice.service';
import { LOGOUTUSER, CLEARCART } from './storemodule/redux/coreaction';
import { RootStoreState } from './storemodule/redux/corestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public queryParamsValue = '?';

  @select(value => value.loginstate) $loginData: Observable<object>;
  @select(value => value.cartstate) $cartState: Observable<any>;
  subsciption: Subscription;

  constructor(private authservice: AuthserviceService,
              private ngRedux: NgRedux<RootStoreState>,
              private route: Router,
              private routerState: ActivatedRoute,
              ) {
    ngRedux.subscribe(() => {
        // console.log(ngRedux.getState());
    });
    // console.log(this.queryParamsValue);
   }

  ngOnInit() {
    // console.log(this.route.routerState.snapshot.url);
    this.subsciption = combineLatest(this.routerState.queryParamMap)
    .subscribe((paramState => {
      if (!(paramState[0].get('user'))) { return '?'; }
      this.queryParamsValue = paramState[0].get('user');
    }));
    if (this.authservice.loginStatus()) {
      /*
      const decodedData=this.authservice.decodeToken('authToken');
      this.ngRedux.dispatch({type:USERDATA,data:decodedData});
      this.route.navigate(['/shopping/shoppingList'],{queryParams:{user:decodedData.name}});
      */
      this.authservice.logoutService();
      this.ngRedux.dispatch({type: LOGOUTUSER});
    }
  }
  logOut() {
    this.authservice.logoutService();
    this.ngRedux.dispatch({type: CLEARCART});
    this.ngRedux.dispatch({type: LOGOUTUSER});
    this.route.navigate(['/login']);
  }
  ngOnDestroy() {
    this.subsciption.unsubscribe();
  }
  scroll() {
    document.body.scrollTop = 0;
  }
}

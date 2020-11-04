import { NgRedux } from '@angular-redux/store';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { SHOPPING_SHOW_LOAD_ADD_TO_CART, SHOPPING_SHOW_LOAD_DEL_FROM_CART, SHOPPING_SHOW_LOAD_MOV_CART, SHOW_LOAD } from 'src/app/storemodule/redux/coreaction';
import { RootStoreState } from 'src/app/storemodule/redux/corestore';

@Injectable({
    providedIn: 'root'
})
export class HttpRequestInterceptor implements HttpInterceptor {
    securityToken: any;
    accessToken: any;
    constructor(private ngRedux: NgRedux<RootStoreState>) {
       ngRedux.subscribe(() => this.securityToken = ngRedux.getState().logstate.userAuthToken);
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log('request initiated');
        // console.log(request.url);
        if (request.url.match(/\/addItem/))
        {
            // console.log('shopping request initiated');
            this.ngRedux.dispatch({type: SHOPPING_SHOW_LOAD_ADD_TO_CART});
        }
        if (request.url.match(/\/deleteItem/))
        {
            // console.log('shopping request initiated');
            this.ngRedux.dispatch({type: SHOPPING_SHOW_LOAD_DEL_FROM_CART});
        }
        if (request.url.match(/\/summary/))
        {
            // console.log('shopping request initiated');
            this.ngRedux.dispatch({type: SHOPPING_SHOW_LOAD_MOV_CART});
        }
        else {
            this.ngRedux.dispatch({type: SHOW_LOAD});
        }

        // if (request.url.match(/\/addProduct/ ) ||
        //    request.url.match(/\/deleteProduct/ ) ||
        //    request.url.match(/\/updateProduct/ )) {
        // request = request.clone({setHeaders: {AccessToken: 'securityToken'}});
        // }
        this.accessToken = localStorage.getItem('accessToken');
        // console.log(this.accessToken)
        if(this.accessToken)
        {
        request = request.clone({setHeaders: {accessToken: this.accessToken}});
        }
        return next.handle(request);
    }
}

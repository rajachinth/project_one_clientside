import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NgRedux } from '@angular-redux/store';
import { RootStoreState } from 'src/app/storemodule/redux/corestore';

@Injectable({
  providedIn: 'root'
})
export class LogincheckService implements CanActivate {

  constructor(private ngRedux: NgRedux<RootStoreState>,private route: Router,) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    const isLoggedIn = this.ngRedux.getState().loginstate.isUserLogged;
    if (isLoggedIn) {
      return this.route.navigate(['/home']);
    }
    else {
      return true;
    }
  }
}

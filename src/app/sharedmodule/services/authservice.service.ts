import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import { RootStoreState } from 'src/app/storemodule/redux/corestore';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private jwt: JwtHelperService, private ngRedux: NgRedux<RootStoreState>) { }

  loginService(token?: string) {
   try {  localStorage.setItem('authToken', token); } catch (e) { console.log(e); }
  }
  loginStatus() {
    let accesToken;
    try { accesToken = localStorage.getItem('accessToken'); } catch (e) { console.log(e); }
    accesToken = (accesToken) ? accesToken : this.ngRedux.getState().tokenstate.accessToken;
    console.log(this.ngRedux.getState().tokenstate.accessToken);
    if (!this.jwt.isTokenExpired(accesToken)) { return true; } else { return false; }
  }
  decodeToken() {
    let authToken;
    try {   authToken = localStorage.getItem('authToken'); } catch (e) { console.log(e); }
    authToken = (authToken) ? authToken : this.ngRedux.getState().tokenstate.authToken;
    console.log(this.ngRedux.getState().tokenstate.accessToken);
    const DTOKEN = this.jwt.decodeToken(authToken);
    return DTOKEN;
  }
  decodeCustomToken(token) {
    const DTOKEN = this.jwt.decodeToken(token);
    return DTOKEN;
  }
  logoutService() {
    try {  localStorage.removeItem('accessToken');
           localStorage.removeItem('authToken'); } catch (e) { console.log(e); }
  }
}

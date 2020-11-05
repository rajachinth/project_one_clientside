import { Injectable } from '@angular/core';
import { AuthserviceService } from './authservice.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  constructor(private authservice: AuthserviceService, private route: Router) { }

  canActivate(activeRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
    if (this.authservice.loginStatus()) {
      const decodevalue = this.authservice.decodeToken();
      if (decodevalue.loggedin) { return true; } else { return this.route.navigate(['/routeRedirect/accessdenied'], {queryParams: {requestbackURL: routerState.url}}); }
    } else { this.route.navigate(['/routeRedirect/accessdenied'], {queryParams: {requestbackURL: routerState.url}}); }
  }
}

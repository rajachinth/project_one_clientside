import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { BadRequestError, NotFounfError, InternalServerError, ApplicationError } from 'src/app/sharedmodule/global errors/applicationerrors';
import { ShoppingcartService } from 'src/app/sharedmodule/services/shoppingcart.service';


@Component({
  selector: 'app-o-shop-profile',
  templateUrl: './o-shop-profile.component.html',
  styleUrls: ['./o-shop-profile.component.css']
})
export class OShopProfileComponent implements OnInit {

  @select(value => value.logstate.show) $logState: Observable<object>;

  $showProgress: Observable<boolean>;
  decodedData: any;
  $errorStatus: Observable<string>;
  showlabel: Boolean;

  showdata:Boolean;
  constructor(private shopserver: ShoppingcartService,
              private routeState:ActivatedRoute,
              private route: Router) {}
  ngOnInit() {
    if(this.routeState.snapshot.queryParamMap.has('updateSuccess'))
    {
      this.showlabel=true;
    }
    this.showdata=false;
    this.$showProgress = of(true);
    this.$errorStatus = of(null);
    this.shopserver.getUserDetailsService()
        .pipe(take(1))
        .subscribe((responseData: any) => {
          this.decodedData = responseData;
        },
        (error) => {
          this.$showProgress = of(false);
          if (error instanceof BadRequestError) { return this.$errorStatus = of('unsupported user data'); }
          if (error instanceof NotFounfError) { return this.$errorStatus = of('data not found in database'); }
          if (error instanceof InternalServerError) { return this.$errorStatus = of('some internal server issue'); }
          if (error instanceof ApplicationError) { return this.$errorStatus = of('something went wrong'); }
        },
        () => {
          this.$showProgress = of(false);
          this.showdata=true
        });
  }
  editDetails() {
    this.route.navigate(['/profile/edit'], 
      {queryParams: {name: this.decodedData.name,address: this.decodedData.address,email: this.decodedData.email,
        mobile: this.decodedData.mobile,pincode: this.decodedData.pincode}});
  }
}

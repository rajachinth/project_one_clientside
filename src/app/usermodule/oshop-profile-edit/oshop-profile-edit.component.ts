import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { BadRequestError, NotFounfError, InternalServerError, ApplicationError } from 'src/app/sharedmodule/global errors/applicationerrors';
import { ShoppingcartService } from 'src/app/sharedmodule/services/shoppingcart.service';
import { SyncValidationCheck } from 'src/app/sharedmodule/validators/sync-validation.component';


export interface UserDetailsEdit {
  name: string;
  address: string;
  email: string;
  mobile: any;
  pincode: any;
}


@Component({
  selector: 'app-oshop-profile-edit',
  templateUrl: './oshop-profile-edit.component.html',
  styleUrls: ['./oshop-profile-edit.component.css']
})

export class OshopProfileEditComponent implements OnInit  {
  constructor(private shopserver: ShoppingcartService,
              private route: Router,
              private routerstate: ActivatedRoute) {}

  @select(value => value.logstate.show) $logState: Observable<object>;
  userDetails = {
    name: null,
    address: null,
    email: null,
    mobile: null,
    pincode: null,
  };

  $showProgress: Observable<boolean>;
  decodedData: any;
  $errorStatus: Observable<string>;
  showsuccess: Boolean;

  edituser = new FormGroup({
    username: new FormControl('', [
             Validators.required,
             Validators.minLength(4),
             Validators.maxLength(15),
             SyncValidationCheck.noSpecialCharcterValidation
    ]),
    email: new FormControl('', [
            Validators.required,
            SyncValidationCheck.emailValidation
    ]),
    mobile: new FormControl('', [
             Validators.required,
             Validators.minLength(10),
             Validators.maxLength(10)
    ]),
    pincode: new FormControl('', [
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(6)
    ]),
    address: new FormControl('', [
              Validators.required,
              Validators.maxLength(40),
              Validators.minLength(8),
    ]),
  });
  ngOnInit() {
    this.userDetails.name = this.routerstate.snapshot.queryParamMap.get('name');
    this.userDetails.address = this.routerstate.snapshot.queryParamMap.get('address');
    this.userDetails.email = this.routerstate.snapshot.queryParamMap.get('email');
    this.userDetails.mobile = this.routerstate.snapshot.queryParamMap.get('mobile');
    this.userDetails.pincode = this.routerstate.snapshot.queryParamMap.get('pincode');

    // console.log(this.userDetails);
  }

  save(signUpData) {
    this.showsuccess = false;
    // console.log(signUpData);
    this.$showProgress = of(true);
    this.$errorStatus = of(null);
    this.shopserver.userEditService(signUpData)
        .pipe(take(1))
        .subscribe((responseData: any) => {
          this.decodedData = responseData;
          // console.log(this.decodedData);
        },
        (error) => {
          // console.log(error);
          this.$showProgress = of(false);
          if (error instanceof BadRequestError) { return this.$errorStatus = of('unsupported user data'); }
          if (error instanceof NotFounfError) { return this.$errorStatus = of('data not found in database'); }
          if (error instanceof InternalServerError) { return this.$errorStatus = of('some internal server issue'); }
          if (error instanceof ApplicationError) { return this.$errorStatus = of('something went wrong'); }
        },
        () => {
          this.showsuccess = true;
          this.$showProgress = of(false);
          this.route.navigate(['/profile'], {queryParams: {updateSuccess: 'yes'}});
        });
  }
  formReset() {
    this.showsuccess = false;
    this.edituser.reset();
    this.$errorStatus = of(null);
  }

}

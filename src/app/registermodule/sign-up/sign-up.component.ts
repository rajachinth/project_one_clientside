import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of, Observable } from 'rxjs';
import { NgRedux, select } from '@angular-redux/store';
import { take } from 'rxjs/operators';
import { BadRequestError, NotFounfError, InternalServerError, ApplicationError } from 'src/app/sharedmodule/global errors/applicationerrors';
import { AuthserviceService } from 'src/app/sharedmodule/services/authservice.service';
import { UserService } from 'src/app/sharedmodule/services/userservice.service';
import { AsyncUniquecheckService } from 'src/app/sharedmodule/validators/async-uniquecheck.service';
import { SyncValidationCheck } from 'src/app/sharedmodule/validators/sync-validation.component';
import { SIGNUPDATA } from 'src/app/storemodule/redux/coreaction';
import { RootStoreState } from 'src/app/storemodule/redux/corestore';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent
{
  @select(value => value.logstate.show) $logState: Observable<object>;
  $showProgress: Observable<boolean>;
  $showData: Observable<boolean>;
  decodedData: any;
  $errorStatus: Observable<string>;

  @select(value => value.signupstate) $signupObject: Observable<object>;
  
  constructor(private userService: UserService,
              private authService: AuthserviceService,
              private ngRedux: NgRedux<RootStoreState>,
              private asyncValidationService: AsyncUniquecheckService) {}

  signupform = new FormGroup({
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
    ]),
    uniqueID: new FormControl('', [
             Validators.required,
             Validators.minLength(6),
             Validators.maxLength(10),
             SyncValidationCheck.noSpaceValidation],
             this.asyncValidationService.uniqueNameCheck()),
    password: new FormControl('', [
              Validators.required,
              Validators.maxLength(10),
              Validators.minLength(4),
              SyncValidationCheck.noSpaceValidation
    ]),
    pincode: new FormControl('', [
              Validators.required,
    ]),
    address: new FormControl('', [
              Validators.required,
              Validators.maxLength(40),
              Validators.minLength(8),
    ]),
  });

  signUp(signUpData) {
    // console.log(signUpData);
    this.$showProgress = of(true);
    this.$showData = of(false);
    this.$errorStatus=of(null);
    this.userService.userSignupService(signUpData)
        .pipe(take(1))
        .subscribe((responseData: any) => {
          const authToken: string = responseData.toString();
          localStorage.setItem('signUpToken', authToken);
          this.decodedData = this.authService.decodeToken('signUpToken');
          // console.log(this.decodedData);
        },
        (error) => {
          this.$showProgress = of(false);
          this.$showData = of(false);
          if (error instanceof BadRequestError) { return this.$errorStatus = of('unsupported user data'); }
          if (error instanceof NotFounfError) { return this.$errorStatus = of('data not found in database'); }
          if (error instanceof InternalServerError) { return this.$errorStatus = of('some internal server issue'); }
          if (error instanceof ApplicationError) { return this.$errorStatus = of('something went wrong'); }
        },
        () => {
          this.ngRedux.dispatch({type: SIGNUPDATA, data: this.decodedData});
          this.$showProgress = of(false);
          this.$showData = of(true);
        });
  }
  formReset()
  {
    this.signupform.reset();
    this.$errorStatus=of(null);
  }
}

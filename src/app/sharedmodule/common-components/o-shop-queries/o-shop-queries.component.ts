import { select } from '@angular-redux/store';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { BadRequestError, NotFounfError, InternalServerError, ApplicationError } from '../../global errors/applicationerrors';
import { UserService } from '../../services/userservice.service';
import { SyncValidationCheck } from '../../validators/sync-validation.component';


@Component({
  selector: 'app-o-shop-queries',
  templateUrl: './o-shop-queries.component.html',
  styleUrls: ['./o-shop-queries.component.css']
})
export class OShopQueriesComponent {

  constructor(private userService: UserService) {}

  @select(value => value.logstate.show) $logState: Observable<object>;
  $showProgress: Observable<boolean>;
  $showData: Observable<boolean>;
  decodedData: any;
  $errorStatus: Observable<string>;

  isDiasble: Boolean = true;

  categories = ['Oils', 'Seeds', 'Seed Powders'];
  oils = ['Coconut Oil', 'Castor Oil', 'Neem Oil', 'Pongamia Oil', 'Sesame Oil'];
  seeds = ['Castor Seeds', 'Neem Seeds', 'Maize', 'Horse Gram', 'Sorghum Seeds', 'Pearl Millet', 'Pongamia Seeds', 'Tamarind seeds'];
  seedPowder = ['Castor Seed Powder', 'Groundnut Cake Powder', 'Neem Seed Powder', 'Maize Powder', 'Pongamia Seed Powder'];

  selectedValueCategory = null;
  selectedValueProduct = null;
  products = [];

  @select(value => value.signupstate) $signupObject: Observable<object>;

  queryForm = new FormGroup({
    username: new FormControl('', [
             Validators.required,
             Validators.minLength(4),
             Validators.maxLength(15),
             SyncValidationCheck.noSpecialCharcterValidation
    ]),
    mobile: new FormControl('', [
             Validators.required,
    ]),
    pincode: new FormControl('', [
              Validators.required,
    ]),
    email: new FormControl('', [Validators.required,SyncValidationCheck.emailValidation]),
    address: new FormControl('', [
              Validators.required,
              Validators.maxLength(40),
              Validators.minLength(10),
    ]),
    category: new FormControl('', [ Validators.required]),
    product: new FormControl('', [ Validators.required]),
    query: new FormControl('', [ Validators.required, Validators.maxLength(40), Validators.minLength(8)]),
  });

  valueChange(event) {
    this.products = [];
    this.isDiasble = false;
    if (event.target.value == 'Oils') { this.products = [].concat(this.oils); }
    if (event.target.value == 'Seeds') { this.products = [].concat(this.seeds); }
    if (event.target.value == 'Seed Powders') { this.products = [].concat(this.seedPowder); }
  }

  submitQuery(queryData) {
    // console.log(queryData);
    this.$showProgress = of(true);
    this.$showData = of(false);
    this.$errorStatus = of(null);
    this.userService.userQueriesService(queryData)
        .pipe(take(1))
        .subscribe((responseData: any) => {},
        (error) => {
          this.$showProgress = of(false);
          this.$showData = of(false);
          if (error instanceof BadRequestError) { return this.$errorStatus = of('unsupported user data'); }
          if (error instanceof NotFounfError) { return this.$errorStatus = of('data not found in database'); }
          if (error instanceof InternalServerError) { return this.$errorStatus = of('some internal server issue'); }
          if (error instanceof ApplicationError) { return this.$errorStatus = of('something went wrong'); }
        },
        () => { this.$showProgress = of(false); this.$showData = of(true); this.formReset(); });
  }
  formReset() {
    this.queryForm.reset();
    this.$errorStatus = of(null);
    this.products = [];
  }

}

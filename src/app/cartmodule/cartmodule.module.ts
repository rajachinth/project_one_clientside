import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartmoduleRoutingModule } from './cartmodule-routing.module';
import { OshopCartSummaryComponent } from './oshop-cart-summary/oshop-cart-summary.component';
import { OshopCartComponent } from './oshop-cart/oshop-cart.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';


@NgModule({
  declarations: [
    OshopCartComponent,
    OshopCartSummaryComponent,
  ],
  imports: [
    CommonModule,
    CartmoduleRoutingModule,
    SharedmoduleModule,
  ]
})
export class CartmoduleModule { }

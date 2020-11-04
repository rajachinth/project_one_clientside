import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdermoduleRoutingModule } from './ordermodule-routing.module';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { OshopUserOrderPreviewComponent } from './oshop-user-order-preview/oshop-user-order-preview.component';
import { OshopUserOrdersComponent } from './oshop-user-orders/oshop-user-orders.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';


@NgModule({
  declarations: [
    OrderSuccessComponent,
    OshopUserOrderPreviewComponent,
    OshopUserOrdersComponent,
  ],
  imports: [
    CommonModule,
    OrdermoduleRoutingModule,
    SharedmoduleModule,
  ]
})
export class OrdermoduleModule { }

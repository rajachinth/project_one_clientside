import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidrouteComponent } from '../sharedmodule/common-components/invalidroute/invalidroute.component';

import { AuthguardService } from '../sharedmodule/services/authguard.service';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { OshopUserOrderPreviewComponent } from './oshop-user-order-preview/oshop-user-order-preview.component';
import { OshopUserOrdersComponent } from './oshop-user-orders/oshop-user-orders.component';

const routes: Routes = [
 {path: '', children: [
  {path: 'success', component: OrderSuccessComponent, pathMatch: 'full'},
  {path: 'user-orders', component: OshopUserOrdersComponent, pathMatch: 'full', canActivate: [AuthguardService]},
  {path: 'user-order-preview/:orderID', component: OshopUserOrderPreviewComponent, pathMatch: 'full', canActivate: [AuthguardService]},
  {path: '**', component: InvalidrouteComponent, pathMatch: 'full'}
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdermoduleRoutingModule { }

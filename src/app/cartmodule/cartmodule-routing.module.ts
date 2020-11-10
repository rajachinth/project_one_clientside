import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidrouteComponent } from '../sharedmodule/common-components/invalidroute/invalidroute.component';
import { AuthguardService } from '../sharedmodule/services/authguard.service';

import { OshopCartSummaryComponent } from './oshop-cart-summary/oshop-cart-summary.component';
import { OshopCartComponent } from './oshop-cart/oshop-cart.component';

const routes: Routes = [
    {path: '' , children: [
      {path: 'details', pathMatch: 'full', component: OshopCartComponent},
      {path: 'summary', pathMatch: 'full', component: OshopCartSummaryComponent},
      {path: '**', pathMatch: 'full', component: InvalidrouteComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartmoduleRoutingModule { }

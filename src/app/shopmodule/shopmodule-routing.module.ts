import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidrouteComponent } from '../sharedmodule/common-components/invalidroute/invalidroute.component';

import { OshopHomeComponent } from './oshop-home/oshop-home.component';
import { OshopProductSearchComponent } from './oshop-product-search/oshop-product-search.component';

const routes: Routes = [
 {path: '', children: [
  {path: 'search-product', component: OshopProductSearchComponent, pathMatch: 'full'},
  {path: '', component: OshopHomeComponent, pathMatch: 'full'},
  {path: '**', component: InvalidrouteComponent, pathMatch: 'full'}
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopmoduleRoutingModule { }

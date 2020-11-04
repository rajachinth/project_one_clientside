import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidrouteComponent } from '../sharedmodule/common-components/invalidroute/invalidroute.component';

import { AuthguardService } from '../sharedmodule/services/authguard.service';
import { OShopProfileComponent } from './o-shop-profile/o-shop-profile.component';
import { OshopProfileEditComponent } from './oshop-profile-edit/oshop-profile-edit.component';

const routes: Routes = [
  {path:'', children: [
    {path: '', component: OShopProfileComponent, pathMatch: 'full', canActivate: [AuthguardService]},
    {path: 'edit', component: OshopProfileEditComponent, pathMatch: 'full', canActivate: [AuthguardService]},
    {path: '**', component: InvalidrouteComponent, pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermoduleRoutingModule { }

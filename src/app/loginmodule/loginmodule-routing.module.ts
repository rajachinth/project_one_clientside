import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidrouteComponent } from '../sharedmodule/common-components/invalidroute/invalidroute.component';
import { LogincheckService } from '../sharedmodule/services/logincheck.service';

import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
 {path: '', children: [
  {path: '', component: SignInComponent, pathMatch: 'full', canActivate:[LogincheckService]},
  {path: '**', component: InvalidrouteComponent, pathMatch: 'full'}
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginmoduleRoutingModule { }

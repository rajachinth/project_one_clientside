import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidrouteComponent } from '../sharedmodule/common-components/invalidroute/invalidroute.component';

import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
 {path: '', children: [
  {path: '', component: SignUpComponent, pathMatch: 'full'},
  {path: '**', component: InvalidrouteComponent, pathMatch: 'full'}
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistermoduleRoutingModule { }

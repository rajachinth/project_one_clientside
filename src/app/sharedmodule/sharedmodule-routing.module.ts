import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidrouteComponent } from './common-components/invalidroute/invalidroute.component';
import { AccessdeniedRouteComponent } from './common-components/accessdenied-route/accessdenied-route.component';



const routes: Routes = [
 {path: '', children: [
  {path: '', component: InvalidrouteComponent, pathMatch: 'full'},
  {path: 'accessdenied', component: AccessdeniedRouteComponent, pathMatch: 'full'},
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedmoduleRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OShopUserQueriesComponent } from './o-shop-user-queries/o-shop-user-queries.component';
import { OShopAboutUsComponent } from './o-shop-about-us/o-shop-about-us.component';
import { InvalidrouteComponent } from '../sharedmodule/common-components/invalidroute/invalidroute.component';



const routes: Routes = [
 {
   path: '', children: [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'user-queries', component: OShopUserQueriesComponent, pathMatch: 'full'},
    {path: 'about-us', component: OShopAboutUsComponent, pathMatch: 'full'},
    {path: '**', component: InvalidrouteComponent, pathMatch: 'full'}
   ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomemoduleRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomemoduleRoutingModule } from './homemodule-routing.module';
import { HomeComponent } from './home/home.component';
import { OShopAboutUsComponent } from './o-shop-about-us/o-shop-about-us.component';
import { OShopUserQueriesComponent } from './o-shop-user-queries/o-shop-user-queries.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';


@NgModule({
  declarations: [
    HomeComponent,
    OShopAboutUsComponent,
    OShopUserQueriesComponent,
  ],
  imports: [
    CommonModule,
    HomemoduleRoutingModule,
    SharedmoduleModule,
  ]
})
export class HomemoduleModule { }

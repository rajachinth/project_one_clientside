import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsermoduleRoutingModule } from './usermodule-routing.module';
import { OShopProfileComponent } from './o-shop-profile/o-shop-profile.component';
import { OshopProfileEditComponent } from './oshop-profile-edit/oshop-profile-edit.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';


@NgModule({
  declarations: [
    OShopProfileComponent,
    OshopProfileEditComponent,
  ],
  imports: [
    CommonModule,
    UsermoduleRoutingModule,
    SharedmoduleModule,
  ]
})
export class UsermoduleModule { }

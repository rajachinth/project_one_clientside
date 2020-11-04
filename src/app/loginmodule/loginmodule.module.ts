import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginmoduleRoutingModule } from './loginmodule-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';


@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    CommonModule,
    LoginmoduleRoutingModule,
    SharedmoduleModule,
  ]
})
export class LoginmoduleModule { }

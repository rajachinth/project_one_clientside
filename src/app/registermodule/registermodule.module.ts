import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistermoduleRoutingModule } from './registermodule-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';


@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RegistermoduleRoutingModule,
    SharedmoduleModule,
  ]
})
export class RegistermoduleModule { }

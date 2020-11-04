import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductmoduleRoutingModule } from './productmodule-routing.module';
import { OshopDialogBox, OshopProductComponent } from './oshop-product/oshop-product.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';


@NgModule({
  declarations: [
    OshopProductComponent,
    OshopDialogBox
  ],
  imports: [
    CommonModule,
    ProductmoduleRoutingModule,
    SharedmoduleModule,
  ],
  entryComponents: [
    OshopDialogBox
  ],
})
export class ProductmoduleModule { }

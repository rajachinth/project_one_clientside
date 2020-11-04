import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopmoduleRoutingModule } from './shopmodule-routing.module';
import { OshopCategoryComponent } from './oshop-category/oshop-category.component';
import { OshopHomeComponent } from './oshop-home/oshop-home.component';
import { OshopListComponent } from './oshop-list/oshop-list.component';
import { OshopProductSearchComponent } from './oshop-product-search/oshop-product-search.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';


@NgModule({
  declarations: [
    OshopCategoryComponent,
    OshopHomeComponent,
    OshopListComponent,
    OshopProductSearchComponent,
  ],
  imports: [
    CommonModule,
    ShopmoduleRoutingModule,
    SharedmoduleModule,
  ]
})
export class ShopmoduleModule { }

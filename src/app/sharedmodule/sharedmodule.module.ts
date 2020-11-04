import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedmoduleRoutingModule } from './sharedmodule-routing.module';
import { AccessdeniedRouteComponent } from './common-components/accessdenied-route/accessdenied-route.component';

import { AdminguardService } from './services/adminguard.service';
import { AuthguardService } from './services/authguard.service';
import { AuthserviceService } from './services/authservice.service';
import { CartorderService } from './services/cartorder.service';
import { PreloadserviceService } from './services/preloadservice.service';
import { ProductformService } from './services/productform.service';
import { ShoppingcartService } from './services/shoppingcart.service';
import { UserService } from './services/userservice.service';
import { AsyncUniquecheckService } from './validators/async-uniquecheck.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxGalleryModule } from 'ngx-gallery';
import { NgxPaginationModule } from 'ngx-pagination';
import { OShopQueriesComponent } from './common-components/o-shop-queries/o-shop-queries.component';
import { OShopCarouselComponent } from './common-components/o-shop-carousel/o-shop-carousel.component';
import { AngularmaterialModule } from './angularmaterial/angularmaterial.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InvalidrouteComponent } from './common-components/invalidroute/invalidroute.component';
import { OshopTemplateOneComponent } from './common-components/oshop-template-one/oshop-template-one.component';
import { OshopTemplateTwoComponent } from './common-components/oshop-template-two/oshop-template-two.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    AccessdeniedRouteComponent,
    InvalidrouteComponent,
    OShopCarouselComponent,
    OShopQueriesComponent,
    OshopTemplateOneComponent,
    OshopTemplateTwoComponent,
  ],
  imports: [
    CommonModule,
    SharedmoduleRoutingModule,
    NgxPaginationModule,
    NgxGalleryModule,
    NgbModule,
    AngularmaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    IonicModule .forRoot(),
  ],
  providers: [
    UserService,
    ProductformService,
    AuthserviceService,
    AuthguardService,
    AdminguardService,
    ShoppingcartService,
    CartorderService,
    PreloadserviceService,
    AsyncUniquecheckService,
  ],
  exports: [
    NgxPaginationModule,
    NgxGalleryModule,
    NgbModule,
    AngularmaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    IonicModule,
    AccessdeniedRouteComponent,
    InvalidrouteComponent,
    OShopCarouselComponent,
    OShopQueriesComponent,
    OshopTemplateOneComponent,
    OshopTemplateTwoComponent,
  ]
})
export class SharedmoduleModule { }

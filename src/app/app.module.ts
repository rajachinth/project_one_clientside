import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpRequestInterceptor } from './sharedmodule/services/httprequest.interceptor';
import { HttpResponseInterceptor } from './sharedmodule/services/httpresponse.interceptor';
import { SharedmoduleModule } from './sharedmodule/sharedmodule.module';
import { StoremoduleModule } from './storemodule/storemodule.module';

export function tokenGetter() {
  return localStorage.getItem('no_token');
}

export class CustomHammerConfig extends HammerGestureConfig  {
  overrides = {
      pinch: { enable: false },
      rotate: { enable: false }
  };
}

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtModule.forRoot({ config: {tokenGetter, allowedDomains: []} }),
    SharedmoduleModule,
    StoremoduleModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true},
    {provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadserviceService } from './sharedmodule/services/preloadservice.service';

const routes: Routes = [
      {path: 'login', data: {preload: true}, loadChildren: () => import('./loginmodule/loginmodule.module')
                                                                .then(m => m.LoginmoduleModule)},
      {path: 'register', data: {preload: true}, loadChildren: () => import('./registermodule/registermodule.module')
                                                                .then(m => m.RegistermoduleModule)},
      {path: 'home', data: {preload: true}, loadChildren: () => import('./homemodule/homemodule.module')
                                                                .then(m => m.HomemoduleModule)},
      {path: 'view-product/:productID', data: {preload: true}, loadChildren: () => import('./productmodule/productmodule.module')
                                                                .then(m => m.ProductmoduleModule)},
      {path: 'cart', data: {preload: true}, loadChildren: () => import('./cartmodule/cartmodule.module')
                                                                .then(m => m.CartmoduleModule)},
      {path: 'profile', data: {preload: true}, loadChildren: () => import('./usermodule/usermodule.module')
                                                                .then(m => m.UsermoduleModule)},
      {path: 'order', data: {preload: true}, loadChildren: () => import('./ordermodule/ordermodule.module')
                                                                .then(m => m.OrdermoduleModule)},
      {path: 'routeRedirect', data: {preload: true}, loadChildren: () => import('./sharedmodule/sharedmodule.module')
                                                                .then(m => m.SharedmoduleModule)},
      {path: 'o-shop', data: {preload: true}, loadChildren: () => import('./shopmodule/shopmodule.module')
                                                                .then(m => m.ShopmoduleModule)},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', data: {preload: true}, loadChildren: () => import('./sharedmodule/sharedmodule.module')
                                                                .then(m => m.SharedmoduleModule)},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadserviceService, scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})

export class AppRoutingModule { }

import { isDevMode, NgModule } from '@angular/core';
import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store';
import { RootStoreState, rootReducer, INITIALSTATE } from './redux/corestore';

@NgModule({
  declarations: [],
  imports: [
    NgReduxModule,
  ],
  exports: [
    NgReduxModule
  ],
})

export class StoremoduleModule {
  constructor(ngRedux: NgRedux<RootStoreState>, devTools: DevToolsExtension) {
    // const enhancer = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(rootReducer, INITIALSTATE, []);
  }
}

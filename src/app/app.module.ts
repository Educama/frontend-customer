// angular modules
import { NgModule } from "@angular/core";
import { APP_BASE_HREF } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// ngrx module
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
// global app parts
import { AppComponent } from "./app.component";
import {
  APP_ROUTING_PROVIDERS,
  ROUTING
} from "./app.routes";
import {
  INITIAL_STATE,
  reducers
} from "./app.reducers";
import { environment } from "../environments/environment";
// shared module and feature modules
import { FrontendSharedModule } from "educama-frontend-shared";
import { CustomerCaptureModule } from "./customer-capture/customer-capture.module";
import { CustomerCommonModule } from "./customer-common/customer-common.module";
import { CustomerListModule } from "./customer-list/customer-list.module";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    EffectsModule.forRoot([]),
    CustomerCaptureModule,
    CustomerCommonModule,
    CustomerListModule,
    ROUTING,
    FrontendSharedModule.forRoot(),
    StoreModule.forRoot(reducers, { initialState: INITIAL_STATE }),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : []
  ],
  declarations: [ AppComponent ],
  providers: [
    { provide: APP_BASE_HREF, useValue: "/" },
    APP_ROUTING_PROVIDERS
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

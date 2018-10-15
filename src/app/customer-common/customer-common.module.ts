import { NgModule } from "@angular/core";
import { FrontendSharedModule } from "educama-frontend-shared";
import { CUSTOMER_ROUTING } from "./routes/customer.routes";
import { EffectsModule } from "@ngrx/effects";
import { CustomerListEffect } from "./effects/customer-list.effect";
import { CustomerCaptureEffect } from "./effects/customer-capture.effects";

@NgModule({
  imports: [
    CUSTOMER_ROUTING,
    FrontendSharedModule,
    EffectsModule.forFeature([
      CustomerListEffect,
      CustomerCaptureEffect
    ])
  ]
})
export class CustomerCommonModule {
}

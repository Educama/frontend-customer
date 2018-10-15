import { NgModule } from "@angular/core";
import { FrontendSharedModule } from "educama-frontend-shared";
import { CustomerCapturePageComponent } from "./container/customer-capture-page.component";
import { CustomerCaptureComponent } from "./presentationals/customer-capture.component";

@NgModule({
  imports: [
    FrontendSharedModule
  ],
  declarations: [
    CustomerCapturePageComponent,
    CustomerCaptureComponent
  ],
  exports: [
    CustomerCapturePageComponent
  ]
})
export class CustomerCaptureModule {
}

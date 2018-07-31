import { NgModule } from "@angular/core";
import { FrontendSharedModule } from "educama-frontend-shared";
import { CustomerListPageComponent } from "./container/customer-list-page.component";
import { CustomerListComponent } from "./components/customer-list.component";

@NgModule({
  imports: [
    FrontendSharedModule
  ],
  declarations: [
    CustomerListPageComponent,
    CustomerListComponent
  ],
  exports: [
    CustomerListPageComponent
  ]
})
export class CustomerListModule {
}

import {
  RouterModule,
  Routes
} from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "customers",
    pathMatch: "full"
  }
];

export const APP_ROUTING_PROVIDERS: any[] = [];

export const ROUTING = RouterModule.forRoot(routes);

import {
  Component,
  OnDestroy,
  OnInit
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { CustomerService } from "educama-frontend-shared";
import { State } from "../../app.reducers";
import * as actions from "../../customer-common/store/customer-capture-page.actions";
import { environment } from "../../../environments/environment";

@Component({
  selector: "educama-customer-capture-page",
  templateUrl: "./customer-capture-page.component.html"
})
export class CustomerCapturePageComponent implements OnInit, OnDestroy {

  constructor(private _activatedRoute: ActivatedRoute,
              private _customerService: CustomerService,
              private _store: Store<State>) {
  }

  public ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      if (params[ "id" ] && params[ "id" ] !== "capture") {
        this.loadCustomer(params[ "id" ]);
      }
    });
  }

  public ngOnDestroy() {
    this._store.dispatch(new actions.InitializeCustomerCaptureSliceAction());
  }

  // ***************************************************
  // Data Retrieval
  // ***************************************************

  private loadCustomer(uuid: string) {
    this._customerService.findCustomerById(environment.apiBaseUrl, uuid, this._store).subscribe(
      customer => {
        this._store.dispatch(new actions.LoadCustomerAction(customer));
      }
    );
  }
}

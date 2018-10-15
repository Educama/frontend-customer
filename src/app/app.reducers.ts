import { ActionReducerMap } from "@ngrx/store";
import { CUSTOMER_LIST_PAGE_REDUCER } from "./customer-common/store/customer-list-page.reducer";
import { CUSTOMER_CAPTURE_PAGE_REDUCER } from "./customer-common/store/customer-capture-page.reducer";
import { CustomerListSlice } from "./customer-common/store/customer-list-page.slice";
import { CUSTOMER_LIST_SLICE_INITIAL_STATE } from "./customer-common/store/customer-list-page.initial-state";
import { CustomerCaptureSlice } from "./customer-common/store/customer-capture-page.slice";
import { CUSTOMER_CAPTURE_SLICE_INITIAL_STATE } from "./customer-common/store/customer-capture-page.initial-state";
import {
  ERROR_REDUCER,
  ERROR_SLICE_INITIAL_STATE,
  ErrorSlice
} from "educama-frontend-shared";

export interface State {
  customerListSlice: CustomerListSlice;
  customerCaptureSlice: CustomerCaptureSlice;
  errorSlice: ErrorSlice;
}

export const INITIAL_STATE = {
  customerListSlice: CUSTOMER_LIST_SLICE_INITIAL_STATE,
  customerCaptureSlice: CUSTOMER_CAPTURE_SLICE_INITIAL_STATE,
  errorSlice: ERROR_SLICE_INITIAL_STATE
};

export const reducers: ActionReducerMap<State> = {
  customerListSlice: CUSTOMER_LIST_PAGE_REDUCER,
  customerCaptureSlice: CUSTOMER_CAPTURE_PAGE_REDUCER,
  errorSlice: ERROR_REDUCER
};

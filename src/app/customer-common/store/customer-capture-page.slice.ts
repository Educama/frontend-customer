import { CustomerResource } from "educama-frontend-shared";

export interface CustomerCaptureSlice {
  customer?: CustomerResource;
  saving: boolean;
}

import { CustomerResource } from "educama-frontend-shared";

export interface CustomerListSlice {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  customerList: CustomerResource[];
  loading: boolean;
}

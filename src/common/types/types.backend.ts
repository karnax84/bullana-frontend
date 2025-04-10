
export interface IBackendApiCallBaseResponse {
  status: "success" | "error" | "warn" | "info";
  message?: string;
}

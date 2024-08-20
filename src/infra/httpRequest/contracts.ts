export type HttpMethod = "get" | "post" | "put" | "patch" | "delete";

export type HttpRequestParams = {
  path?: string;
  data?: any;
};

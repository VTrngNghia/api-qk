import {
  AxiosInterceptorManager,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { IApiInstance } from "./axios-instance";
import EFrontToBackCase from "../config/enums/EFrontToBackCase";

export type TCustomInterceptor<T extends AxiosRequestConfig | AxiosResponse> =
  Parameters<AxiosInterceptorManager<T>["use"]>;

export default interface IInitConfig {
  appName: string;
  baseURL: Exclude<AxiosRequestConfig["baseURL"], undefined>;
  instance: IApiInstance;
  shouldLog?: boolean; // default False
  frontToBackCase: EFrontToBackCase;
  requestInterceptors?: TCustomInterceptor<AxiosRequestConfig>[];
  responseInterceptors?: TCustomInterceptor<AxiosResponse>[];
}

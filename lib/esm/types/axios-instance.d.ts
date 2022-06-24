import { AxiosInstance, AxiosRequestConfig } from "axios";
interface IApiResponseErrors {
    [field: string]: string[];
}
export interface IApiResponse {
    success: boolean;
    message?: string;
    errors?: IApiResponseErrors;
}
export interface IAnyResponseData {
    [key: string]: any;
}
export interface IApiInstance extends AxiosInstance {
    request<ResData = any, Res = IApiResponse & ResData, ReqData = any>(config: AxiosRequestConfig<ReqData>): Promise<Res>;
    get<T = IAnyResponseData>(url: string, config?: AxiosRequestConfig): Promise<IApiResponse & T>;
    delete<T = IAnyResponseData>(url: string, config?: AxiosRequestConfig): Promise<IApiResponse & T>;
    head<T = IAnyResponseData>(url: string, config?: AxiosRequestConfig): Promise<IApiResponse & T>;
    post<T = IAnyResponseData>(url: string, data?: any, config?: AxiosRequestConfig): Promise<IApiResponse & T>;
    put<T = IAnyResponseData>(url: string, data?: any, config?: AxiosRequestConfig): Promise<IApiResponse & T>;
    patch<T = IAnyResponseData>(url: string, data?: any, config?: AxiosRequestConfig): Promise<IApiResponse & T>;
}
export {};

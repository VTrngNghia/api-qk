import { IEmployeeGetRequest, IEmployeeGetResponse } from "./employee.type";
declare const employee: {
    get: (params: IEmployeeGetRequest) => Promise<import("axios").AxiosResponse<IEmployeeGetResponse, any>>;
};
export default employee;

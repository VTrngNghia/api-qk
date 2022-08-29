import { IEmployeeGetRequest, IEmployeeGetResponse } from "./employee.type";
import happyTimeAxiosInstance from "../../instances/happytime";

const employee = {
  get: (params: IEmployeeGetRequest) =>
    happyTimeAxiosInstance.get<IEmployeeGetResponse>("/employees"),
};

export default employee;

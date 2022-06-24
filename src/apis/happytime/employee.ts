import {IEmployeeGetRequest, IEmployeeGetResponse} from "./employee.type";
import happyTimeInstance from "../../instances/happytime";

const employee = {
    get: (params: IEmployeeGetRequest) => happyTimeInstance.get<IEmployeeGetResponse>("/employees")
}

export default employee

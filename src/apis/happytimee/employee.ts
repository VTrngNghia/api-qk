import {IEmployeeGetRequest, IEmployeeGetResponse} from "./employee.type";
import happyTimeInstance from "../../instances/happyTime";

const employee = {
    get: (params: IEmployeeGetRequest) => happyTimeInstance.get<IEmployeeGetResponse>("/employees")
}

export default employee

import EEmploymentStatus from "../../config/enums/EEmploymentStatus";
import { IPaginatedResponse } from "../../types/list";
import { IEmployee } from "../../models/employee";

export interface IEmployeeGetRequest {
  search?: string;
  positionId?: number;
  employmentStatus?: EEmploymentStatus;
}

export interface IEmployeeGetResponse extends IPaginatedResponse {
  employees: IEmployee[];
}

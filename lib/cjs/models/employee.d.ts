import ESex from "../config/enums/ESex";
import { IPosition } from "./position";
import { IGroupBase } from "./group";
export interface IEmployee extends IEmployeeBase {
    finance: IEmployeeFinancialInfo;
    education: IEmployeeEducationInfo;
}
export interface IEmployeeBase {
    id: number;
    personal: IEmployeePersonalInfo;
    work: IEmployeeWorkInfo;
}
export interface IEmployeePersonalInfo {
    fullName: string;
    sex?: ESex;
}
export interface IEmployeeWorkInfo {
    employeeCode: string;
    email?: string;
    phone?: string;
    position: IPosition;
    group: IGroupBase;
}
export interface IEmployeeFinancialInfo {
    bank?: string;
    bankAccount?: string;
}
export interface IEmployeeEducationInfo {
}

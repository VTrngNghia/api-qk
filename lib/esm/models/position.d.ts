import { IGroupBase } from "./group";
export interface IPositionBase {
    id: number;
    title: string;
}
export interface IPosition extends IPositionBase {
    groupId: IGroupBase['id'];
}

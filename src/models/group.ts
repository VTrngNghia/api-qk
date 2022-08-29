import { IPosition } from "./position";

export interface IGroupBase {
  id: number;
  title: string;
}

export interface IGroupNode extends IGroupBase {
  childrenGroups: IGroupNode[];
  childrenPositions: IPosition[];
}

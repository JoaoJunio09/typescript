import { IPhone } from "./IPhone";
import { IAddress } from "./IAddress";

export interface IPerson {
	name?: string,
	age?: number,
	phones: IPhone[],
	address: IAddress
};
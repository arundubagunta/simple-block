import { BaseEntry } from "./base-entry.model";

export interface Store extends BaseEntry {
    aisleId: string;
    price: number;
}

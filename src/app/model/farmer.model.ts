import { BaseEntry } from "./base-entry.model";

export interface Farmer extends BaseEntry {
   farmType: 'CERTIFIED' | 'ORGANIC' | 'REGULAR';
}

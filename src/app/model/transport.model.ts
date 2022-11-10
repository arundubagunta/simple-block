import { BaseEntry } from "./base-entry.model";

export interface Transport extends BaseEntry {
    vehicleId: string;
    driverId: string;
    destination: string;
    entryType: string;
}

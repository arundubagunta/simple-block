export interface BaseEntry {
    prodHash?: string;
    name: string;
    id: string;
    quantity?: number;
    sourceId: string;
    location?: string;
    batchNo?: string;
    entryType: string;
    productCode: string;
}

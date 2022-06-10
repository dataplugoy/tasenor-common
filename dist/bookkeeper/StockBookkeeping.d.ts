import { Asset, AssetType } from '../types';
import { StockValueData, StockChangeData } from '../types/assets';
/**
 * A single asset value and amount on the particular moment.
 */
export interface AssetRecord {
    time: Date;
    amount: number;
    value: number;
}
/**
 * Valid types for asset bookkeeping.
 */
export declare type AssetStockType = 'crypto' | 'stock' | 'currency' | 'other';
export declare function isAssetStockType(obj: unknown): obj is AssetStockType;
/**
 * Collection of assets in timeline.
 */
export declare type AssetStock = Record<AssetStockType, Partial<Record<Asset, AssetRecord[]>>>;
/**
 * A class for storing and lookup for current stock and value of different assets in timeline.
 */
export declare class StockBookkeeping {
    stock: AssetStock;
    name: string;
    constructor(name?: string);
    /**
     * Nullify data.
     */
    reset(): void;
    /**
     * Set the fixed value of stock for given time stamp.
     * @param time
     * @param type
     * @param asset
     * @param amount
     * @param value
     */
    set(time: Date, type: AssetType, asset: Asset, amount: number, value: number): void;
    /**
     * Check if asset has recordings.
     * @param type
     * @param asset
     * @returns
     */
    has(type: AssetType, asset: Asset): boolean;
    /**
     * Get the last entry for asset.
     * @param type
     * @param asset
     */
    last(type: AssetType, asset: Asset): AssetRecord & {
        time: Date;
    };
    /**
     * Append a change in value for an asset.
     * @param time
     * @param type
     * @param asset
     * @param amount
     * @param delta
     */
    change(time: Date, type: AssetType, asset: Asset, amount: number, value: number): void;
    /**
     * Find the stock at the given timestamp.
     * @param time
     * @param type
     * @param asset
     */
    get(time: Date, type: AssetType, asset: Asset): AssetRecord;
    /**
     * Try to figure out asset type based on common knowledge and what we have currently.
     * @param asset
     */
    getType(asset: any): AssetType;
    /**
     * Apply stock change data used in transaction asset bookkeeping.
     * @param data
     */
    apply(time: Date, data: StockChangeData): void;
    /**
     * Apply multiple stock change data entries at once.
     * @param data
     */
    applyAll(data: {
        data: StockChangeData;
        time: Date;
    }[]): void;
    /**
     * Get the list of changed asset names in the given stock change data.
     * @param data
     */
    changedAssets(data: StockChangeData): Asset[];
    /**
     * Collect all assets that has recordings.
     */
    assets(): [AssetType, Asset][];
    /**
     * Collect the latest totals of all assets.
     */
    totals(): [AssetType, Asset, number][];
    /**
     * Get the latest total of one asset.
     * @param type
     * @param asset
     * @returns
     */
    total(type: AssetType | Asset, asset?: Asset | undefined): number;
    /**
     * Collect full stock summary.
     */
    summary(roundToZero?: null | number, addType?: boolean, addTime?: boolean): Record<string, StockValueData & {
        time?: Date | undefined;
    }>;
    /**
     * Gather simple summary per ticker.
     */
    toJSON(): Partial<Record<Asset, number>>;
}

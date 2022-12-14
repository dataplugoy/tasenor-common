import { SegmentId } from "../../import";
import { ID } from "../../process_types";
import { AdditionalTransferInfo, Asset, AssetRates, StockValueData } from "../assets";
import { AccountNumber } from "./accounts";
/**
 * Additional optional information like stock changes or conversion rates used for a transaction line.
 */
export type TransactionLineData = {
    stock?: {
        change: Record<Asset, StockValueData>;
    };
    rates?: AssetRates;
};
/**
 * A single line of transaction.
 */
export type TransactionLine = {
    id?: ID;
    account: AccountNumber;
    amount: number;
    description: string;
    data?: AdditionalTransferInfo;
};
/**
 * If transaction is a result of an import, then this type describes if it has been created.
 */
export type ImportExecutionResult = 'not done' | 'created' | 'duplicate' | 'ignored';
/**
 * A transaction data.
 */
export type Transaction = {
    id?: ID;
    date: Date;
    segmentId?: SegmentId;
    entries: TransactionLine[];
    executionResult?: ImportExecutionResult;
};
/**
 * Sort transactions so that their entries are sorted by account number and transactions by their date.
 * @param txs
 * @returns
 */
export declare function sortTransactions(txs: Transaction[]): Transaction[];

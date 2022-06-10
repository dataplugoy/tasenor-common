import { ID, SegmentId } from "interactive-elements";
import { AccountNumber } from ".";
import { AddtionalTransferInfo, Asset, AssetRates, StockValueData } from "..";
/**
 * Additional optional information like stock changes or conversion rates used for a transaction line.
 */
export declare type TransactionLineData = {
    stock?: {
        change: Record<Asset, StockValueData>;
    };
    rates?: AssetRates;
};
/**
 * A single line of transaction.
 */
export declare type TransactionLine = {
    id?: ID;
    account: AccountNumber;
    amount: number;
    description: string;
    data?: AddtionalTransferInfo;
};
/**
 * If transaction is a result of an import, then this type describes if it has been created.
 */
export declare type ImportExecutionResult = 'not done' | 'created' | 'duplicate' | 'ignored';
/**
 * A transaction data.
 */
export declare type Transaction = {
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

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
 *
 * Values are:
 * * `not done` - Execution is not yet performed.
 * * `created` - Entries has been created.
 * * `duplicate` - Entries has been found as duplicate.
 * * `ignored` - Entries has been found as duplicate.
 * * `skipped` - This transaction has been explicitly skipped by user instruction.
 */
export type ImportExecutionResult = 'not done' | 'created' | 'duplicate' | 'ignored' | 'skipped';
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

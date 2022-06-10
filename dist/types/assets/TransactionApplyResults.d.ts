import { AccountNumber, Transaction } from "../bookkeeper";
/**
 * A resulting data from imported transaction execution.
 */
export declare class TransactionApplyResults {
    created: number;
    duplicates: number;
    ignored: number;
    accounts: Record<AccountNumber, number>;
    constructor();
    /**
     * Add transaction as created.
     * @param tx
     */
    create(tx: Transaction): void;
    /**
     * Add transaction as created.
     * @param tx
     */
    ignore(tx: Transaction): void;
    /**
     * Add transaction as duplicate.
     * @param tx
     */
    duplicate(tx: Transaction): void;
    /**
     * Record changes from the transaction.
     * @param tx
     */
    record(tx: Transaction): void;
    /**
     * Combine results from the other result set.
     * @param result
     */
    add(result: Record<string, unknown>): void;
    /**
     * Collect JSON data of the recordings.
     * @returns
     */
    toJSON(): Record<string, number | Record<string, number>>;
}

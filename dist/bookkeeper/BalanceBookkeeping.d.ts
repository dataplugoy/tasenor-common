import { AccountAddress, AccountNumber, Asset, AssetTransferReason, AssetType, TransactionLine } from '../types';
import { ProcessConfig } from '../process_types';
/**
 * An object describing the account and its balance.
 */
export type BalanceSummaryEntry = {
    account: AccountNumber;
    address: AccountAddress;
    debtAddress: AccountAddress;
    balance: number;
    mayTakeLoan: boolean;
};
/**
 * A class for storing account balance.
 */
export declare class BalanceBookkeeping {
    private balance;
    private number;
    constructor();
    /**
     * Apply initial balances.
     * @param balances
     */
    set(account: AccountNumber, value: number): void;
    /**
     * Set up name and number mapping from process config.
     */
    configureNames(config: ProcessConfig): void;
    /**
     * Get the real or temporary name for an account.
     * @param account
     */
    name(account: AccountNumber): string;
    /**
     * Change the account balance and return new total.
     */
    change(account: AccountNumber, change: number): number;
    /**
     * Apply transaction resulting from transfer.
     * @param txEntry
     * @returns
     */
    apply(txEntry: TransactionLine): number;
    /**
     * Revert transaction resulting from transfer.
     * @param txEntry
     * @returns
     */
    revert(txEntry: TransactionLine): number;
    /**
     * Find the balance for the given account.
     */
    get(account: AccountAddress): number;
    /**
     * Get all records.
     */
    summary(): BalanceSummaryEntry[];
    /**
     * Check if the account could record debts separately.
     * @param reason
     * @param type
     * @param asset
     */
    mayTakeLoan(reason: AssetTransferReason, type: AssetType, asset: Asset): boolean;
    /**
     * Convert account address to corresponding debt address.
     * @param addr
     */
    debtAddress(addr: AccountAddress): AccountAddress;
}

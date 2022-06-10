import { AccountAddress, AccountNumber, Asset, AssetTransferReason, AssetType, TransactionLine } from '../types';
/**
 * An object describing the account and its balance.
 */
export declare type BalanceSummaryEntry = {
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
    set(account: AccountNumber, value: number, name: AccountAddress): void;
    /**
     * Change the account balance and return new total.
     */
    change(account: AccountNumber, change: number, name: AccountAddress): number;
    /**
     * Apply transaction resulting from transfer.
     * @param txEntry
     * @param transfer
     * @returns
     */
    apply(txEntry: TransactionLine, name: AccountAddress): number;
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

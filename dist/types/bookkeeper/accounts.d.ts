import Opaque from 'ts-opaque';
/**
 * A type of an account.
 */
export declare enum AccountType {
    ASSET = "ASSET",
    LIABILITY = "LIABILITY",
    EQUITY = "EQUITY",
    REVENUE = "REVENUE",
    EXPENSE = "EXPENSE",
    PROFIT_PREV = "PROFIT_PREV",
    PROFIT = "PROFIT"
}
/**
 * A string presenting account number.
 */
export declare type AccountNumber = Opaque<string, 'AccountNumber'>;
export declare function isAccountNumber(s: unknown): s is AccountNumber;

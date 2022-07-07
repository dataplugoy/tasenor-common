import { Knowledge } from "../bookkeeper";
import { AccountAddress, AccountType, Asset, AssetCode, Currency, PluginCode, TaxType } from "../types";
/**
 * A condition description to match accunts.
 */
export declare type AccountLookupCondition = {
    tax: Asset | TaxType | AssetCode;
    currency?: Currency;
    type?: AccountType | AccountType[];
    plugin?: PluginCode;
    '!plugin'?: PluginCode;
};
/**
 * Additional information for looking up an account.
 */
export interface AccountLookupOption {
    defaultCurrency: Currency;
    plugin: PluginCode;
    strict?: boolean;
}
/**
 * Convert address lookup to condition.
 * @param addr
 * @param options
 * @returns
 */
export declare function conditions(addr: AccountAddress, options: AccountLookupOption): AccountLookupCondition | null;
/**
 * Create SQL expression matching the accounts according to lookup parameters.
 *
 * @param addr
 * @param options
 * @returns
 */
export declare function address2sql(addr: AccountAddress, options: AccountLookupOption, knowledge?: Knowledge | null): string | null;

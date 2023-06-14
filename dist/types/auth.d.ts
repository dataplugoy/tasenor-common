/**
 * Types related to user and login.
 *
 * @module tasenor-common/src/types/erp
 */
import { Email } from './common';
declare class Decimal {
}
/**
 * Plugin cost model.
 * * `COMPULSORY` - Always installed for free and cannot be removed.
 * * `RECOMMENDED` - Recommended and installe by default for free.
 * * `FREE` - Can be installed for free.
 * * `MONTHLY` - Paid monthly fee.
 * * `SINGLE` - Once off payment for use.
 */
export type PricingModel = "COMPULSORY" | "RECOMMENDED" | "FREE" | "MONTHLY" | "SINGLE";
/**
 * List of accessible plugins.
 */
export type LoginPluginData = number[];
/**
 * A subscription information concerning one plugin.
 */
export interface LoginSubscriptionData {
    model: PricingModel;
    price: Decimal;
    billable: Date;
    expires: Date;
    pluginId: number;
}
/**
 * Information about pricing for subscription.
 */
export interface LoginPriceData {
    pluginId: number;
    model: PricingModel;
    price: Decimal;
}
/**
 * A data structure send to the UI of the logged in user.
 */
export interface LoginData {
    id: number;
    email: Email;
    plugins: LoginPluginData;
    subscriptions: LoginSubscriptionData[];
    prices: LoginPriceData[];
}
/**
 * Simply encrypted user data stored on browser.
 */
export interface EncryptedUserData {
    key: string;
    data: string;
}
export {};

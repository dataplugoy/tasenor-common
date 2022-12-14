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
 * A data structure send to the UI of the logged in user.
 */
export interface LoginData {
    id: number;
    email: Email;
    plugins: number[];
    subscriptions: {
        model: PricingModel;
        price: Decimal;
        billable: Date;
        expires: Date;
        pluginId: number;
    }[];
    prices: {
        pluginId: number;
        model: PricingModel;
        price: Decimal;
    }[];
}
export {};

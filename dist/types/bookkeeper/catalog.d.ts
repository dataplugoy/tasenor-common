import { Currency, Language, TokenPair } from '..';
import { TasenorPlugin } from '../plugins';
/**
 * Catalog hooks for backend.
 */
export type CatalogHookAfterLogin = ((Email: any, TokenPair: any) => Promise<TokenPair & Record<string, unknown>>)[];
export type CatalogHook = CatalogHookAfterLogin;
export type CatalogHooks = {
    afterLogin: CatalogHookAfterLogin;
};
/**
 * An accessor for UI plugin functionality.
 */
export declare class Catalog {
    history: unknown;
    getCurrencies(): Currency[];
    language(): Language;
    money2str(cents: number, currency?: Currency, signed?: boolean): string;
    date2str(date: string | number): string;
    t(str: string): string;
    getImportOptions(): Record<string, TasenorPlugin>;
}
/**
 * An accessor for backend plugin functionality.
 */
export declare class BackendCatalog {
    t(str: string, lang: Language): string;
    registerHook(name: string, func: CatalogHook): any;
}

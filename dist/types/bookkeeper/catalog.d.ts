import { Currency, Language } from "..";
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
}
/**
 * An accessor for backend plugin functionality.
 */
export declare class BackendCatalog {
    t(str: string, lang: Language): string;
}

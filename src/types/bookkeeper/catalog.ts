import { Currency, Language } from ".."
import { TasenorPlugin } from "../plugins"

/**
 * An accessor for UI plugin functionality.
 */
export declare class Catalog {

  history: unknown // History component. Redefine where used.

  getCurrencies(): Currency[]
  language(): Language
  money2str(cents: number, currency?: Currency, signed?: boolean): string
  date2str(date: string | number): string
  t(str: string): string
  getImportOptions(): Record<string, TasenorPlugin>
}

/**
 * An accessor for backend plugin functionality.
 */
export declare class BackendCatalog {
  t(str: string, lang: Language): string
}

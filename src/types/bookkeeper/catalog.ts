import { Currency, Email, Language, LoginPluginData, TokenPair } from '..'
import { TasenorPlugin, PluginCode, BackendPlugin } from '../plugins'

/**
 * Catalog hooks for backend.
 */
export type CatalogHookAfterLogin = (email: Email, tokens: TokenPair) => Promise<TokenPair & Record<string, unknown>>
export type CatalogHookSubscribe = (email: Email, code: PluginCode) => Promise<LoginPluginData | null>
export type CatalogHookUnsubscribe = (email: Email, code: PluginCode) => Promise<LoginPluginData | null>
export type CatalogHook = CatalogHookAfterLogin | CatalogHookSubscribe | CatalogHookUnsubscribe
export type CatalogHooks = {
  afterLogin: CatalogHookAfterLogin[]
  subscribe: CatalogHookSubscribe[]
  unsubscribe: CatalogHookUnsubscribe[]
}

/**
 * An accessor for UI plugin functionality.
 */
export declare class Catalog {

  history: unknown // History component. Redefine where used.

  getCurrencies(): Currency[]
  language(): Language
  money2str(cents: number, currency?: Currency, signed?: boolean): string
  date2str(date: string | number): string
  getImportOptions(): Record<string, TasenorPlugin>
  reset(): void
  load(plugin): BackendPlugin
  reload(): Promise<void>
  find(code: PluginCode): BackendPlugin
  install(code: PluginCode): Promise<void>
  uninstall(code: PluginCode): Promise<void>
  installPluginsToDb(db): Promise<void>
  getTranslations(language?: Language): Record<string, Record<string, string>>
  t(str: string, lang: Language): string
}

/**
 * An accessor for backend plugin functionality.
 */
export declare class BackendCatalog {
  t(str: string, lang: Language): string
  registerHook(name: string, func: CatalogHook)
}

import Opaque from 'ts-opaque'
import { ID } from 'interactive-elements'
import { Currency, Language } from '..'
import { ImportRule, UIQuery } from '../..'
import { AccountNumber, Tag } from '.'

/**
 * A configuration variable for defining account for some purpose.
 */
export type AccountAddressConfig = Opaque<string, 'AccountAddressConfig'>
export function isAccountAddressConfig(s: unknown): s is AccountAddressConfig {
  return typeof s === 'string' && /^account\./.test(s)
}

/**
 * A definition of an account as a number of a query to ask more information.
 */
export type AccountConfig = AccountNumber | UIQuery

/**
 * A configuration variable for defining tags for some purpose.
 */
export type TagConfig = Opaque<string, 'TagConfig'>
export function isTagConfig(s: unknown): s is TagConfig {
  return typeof s === 'string' && /^tags\./.test(s)
}

/**
 * Configuration for importer.
 */
export type ImporterConfig = {
  language: Language
  currency: Currency
  handlers: string[]
  rules: ImportRule[]
} & Record<AccountAddressConfig, AccountConfig> & Record<TagConfig, Tag | Tag[]>

/**
 * A data stored for a back-end importer.
 */
export interface Importer {
  id: ID
  config: ImporterConfig
}

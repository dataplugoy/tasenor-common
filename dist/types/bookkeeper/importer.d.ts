import Opaque from 'ts-opaque';
import { ImportCSVOptions } from '../../import';
import { ID } from '../../process_types';
import { Currency, Language } from '..';
import { ImportRule, UIQuery } from '../..';
import { AccountNumber, Tag } from '.';
/**
 * A configuration variable for defining account for some purpose.
 */
export type AccountAddressConfig = Opaque<string, 'AccountAddressConfig'>;
export declare function isAccountAddressConfig(s: unknown): s is AccountAddressConfig;
/**
 * A definition of an account as a number of a query to ask more information.
 */
export type AccountConfig = AccountNumber | UIQuery;
/**
 * A configuration variable for defining tags for some purpose.
 */
export type TagConfig = Opaque<string, 'TagConfig'>;
export declare function isTagConfig(s: unknown): s is TagConfig;
/**
 * Configuration for importer.
 */
export type ImporterConfig = {
    language: Language;
    currency: Currency;
    handlers: string[];
    rules: ImportRule[];
} & Record<AccountAddressConfig, AccountConfig> & Record<TagConfig, Tag | Tag[]>;
/**
 * A data stored for a back-end importer.
 */
export interface Importer {
    id: ID;
    config: ImporterConfig;
}
/**
 * Options for fixed length records parser.
 */
export interface ImportFixedLengthOptions {
    recordLength: number;
    columnLengths: number[];
    columnNames: string[];
}
/**
 * Options for import handler.
 */
export interface TransactionImportOptions {
    parser: 'csv' | 'fixed-length' | 'custom';
    numericFields: string[];
    requiredFields: string[];
    insignificantFields?: string[];
    totalAmountField: string | null;
    textField: string | null;
    csv?: ImportCSVOptions;
    fixedLength?: ImportFixedLengthOptions;
}

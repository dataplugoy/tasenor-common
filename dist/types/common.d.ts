/**
 * All general purpose types.
 *
 * @module tasenor-common/src/types/common
 */
import Opaque from 'ts-opaque';
export type Value = string | number | boolean | null | Value[] | Values | Values[];
export type Values = {
    [key: string]: Value;
};
export declare function isValue(obj: unknown): obj is Value;
export declare function isValues(obj: unknown): obj is Values;
export type DirectoryPath = Opaque<string, 'DirectoryPath'>;
export type FilePath = Opaque<string, 'FilePath'>;
export type TsvFilePath = FilePath;
export type JsonFilePath = FilePath;
export type TarFilePath = FilePath;
export type SqliteDbPath = FilePath;
export type TextFilePath = FilePath;
export type ParsedTsvFileData = string[][];
export type ProcessedTsvFileData = {
    [key: string]: string;
}[];
export type Json = Value;
export type Constructor<T> = new (...args: any[]) => T;
export type Language = 'aa' | 'ab' | 'af' | 'ak' | 'am' | 'an' | 'ar' | 'as' | 'av' | 'ay' | 'az' | 'ba' | 'be' | 'bg' | 'bh' | 'bi' | 'bm' | 'bn' | 'bo' | 'br' | 'bs' | 'ca' | 'ce' | 'ch' | 'co' | 'cr' | 'cs' | 'cu' | 'cv' | 'cy' | 'da' | 'de' | 'dv' | 'dz' | 'ee' | 'el' | 'en' | 'eo' | 'es' | 'et' | 'eu' | 'fa' | 'ff' | 'fi' | 'fj' | 'fo' | 'fr' | 'fy' | 'ga' | 'gd' | 'gl' | 'gn' | 'gu' | 'gv' | 'ha' | 'he' | 'hi' | 'ho' | 'hr' | 'ht' | 'hu' | 'hy' | 'hz' | 'ia' | 'id' | 'ie' | 'ig' | 'ii' | 'ik' | 'io' | 'is' | 'it' | 'iu' | 'ja' | 'jv' | 'kg' | 'ki' | 'kj' | 'kk' | 'kl' | 'km' | 'kn' | 'ko' | 'kr' | 'ks' | 'ku' | 'kv' | 'kw' | 'ky' | 'la' | 'lb' | 'lg' | 'li' | 'ln' | 'lo' | 'lt' | 'lv' | 'mg' | 'mh' | 'mi' | 'mk' | 'ml' | 'mn' | 'mo' | 'mr' | 'ms' | 'mt' | 'my' | 'na' | 'nd' | 'ne' | 'ng' | 'nl' | 'nn' | 'no' | 'nr' | 'nv' | 'ny' | 'oc' | 'oj' | 'om' | 'or' | 'os' | 'pa' | 'pi' | 'pl' | 'ps' | 'pt' | 'qu' | 'rm' | 'rn' | 'ro' | 'ru' | 'rw' | 'sa' | 'sc' | 'sd' | 'sg' | 'sh' | 'si' | 'sk' | 'sl' | 'sm' | 'sn' | 'so' | 'sq' | 'sr' | 'ss' | 'st' | 'su' | 'sv' | 'sw' | 'ta' | 'te' | 'tg' | 'th' | 'ti' | 'tk' | 'tl' | 'tn' | 'to' | 'tr' | 'ts' | 'tt' | 'tw' | 'ty' | 'ug' | 'ur' | 've' | 'vi' | 'vo' | 'wa' | 'wo' | 'xh' | 'yi' | 'yo' | 'za' | 'zh' | 'zu';
export declare const languages: Set<string>;
export declare function isLanguage(s: unknown): s is Language;
export type Currency = 'AFN' | 'ALL' | 'DZD' | 'ARS' | 'AMD' | 'AUD' | 'AZN' | 'BHD' | 'BDT' | 'BYN' | 'BZD' | 'BOB' | 'BAM' | 'BWP' | 'BRL' | 'GBP' | 'BND' | 'BGN' | 'BIF' | 'KHR' | 'CAD' | 'CVE' | 'XAF' | 'CLP' | 'CNY' | 'COP' | 'KMF' | 'CDF' | 'CRC' | 'HRK' | 'CZK' | 'DKK' | 'DJF' | 'DOP' | 'EGP' | 'ERN' | 'EEK' | 'ETB' | 'EUR' | 'GEL' | 'GHS' | 'GTQ' | 'GNF' | 'HNL' | 'HKD' | 'HUF' | 'ISK' | 'INR' | 'IDR' | 'IRR' | 'IQD' | 'ILS' | 'JMD' | 'JPY' | 'JOD' | 'KZT' | 'KES' | 'KWD' | 'LVL' | 'LBP' | 'LYD' | 'LTL' | 'MOP' | 'MKD' | 'MGA' | 'MYR' | 'MUR' | 'MXN' | 'MDL' | 'MAD' | 'MZN' | 'MMK' | 'NAD' | 'NPR' | 'TWD' | 'NZD' | 'NIO' | 'NGN' | 'NOK' | 'OMR' | 'PKR' | 'PAB' | 'PYG' | 'PEN' | 'PHP' | 'PLN' | 'QAR' | 'RON' | 'RUB' | 'RWF' | 'SAR' | 'RSD' | 'SGD' | 'SOS' | 'ZAR' | 'KRW' | 'LKR' | 'SDG' | 'SEK' | 'CHF' | 'SYP' | 'TZS' | 'THB' | 'TOP' | 'TTD' | 'TND' | 'TRY' | 'USD' | 'UGX' | 'UAH' | 'AED' | 'UYU' | 'UZS' | 'VEF' | 'VND' | 'XOF' | 'YER' | 'ZMK' | 'ZWL';
export declare const currencies: Set<string>;
export declare function isCurrency(s: unknown): s is Currency;
export type Version = Opaque<string, 'Version'>;
export declare function isVersion(s: unknown): s is Version;
export declare function versionCompare(a: Version, b: Version): 1 | 0 | -1;
export declare function latestVersion(versions: Array<Version>): Version | null;
export type UUID = Opaque<string, 'UUID'>;
export type Email = Opaque<string, 'Email'>;
export type DatabaseName = Opaque<string, 'DatabaseName'>;
export type PK = Opaque<number, 'PK'>;
export declare const isDatabaseName: (name: unknown) => name is DatabaseName;

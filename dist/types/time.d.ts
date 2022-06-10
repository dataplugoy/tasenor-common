/**
 * Type definitions for time.
 *
 * @module tasenor-common/src/types/time
 */
import Opaque from 'ts-opaque';
export declare type Timestamp = Opaque<number, 'TimeStamp'>;
export declare type ShortDate = string;
export declare function isShortDate(s: unknown): s is ShortDate;
export declare const MINUTES = 60;
export declare const HOURS: number;
export declare const DAYS: number;
export declare const YEARS: number;
/**
 * Convert short month text to long.
 * @param abbrev
 */
export declare function month(abbrev: string): string | null;

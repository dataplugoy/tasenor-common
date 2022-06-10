/**
 * Common utilities.
 *
 * @module tasenor-common/src/utils
 */
/**
 * Check if the current environment is a browser.
 * @returns Boolean.
 */
export declare function isUi(): boolean;
/**
 * Check if the current environment is Node.
 * @returns Boolean.
 */
export declare function isNode(): boolean;
/**
 * A promise to resolve after the given timeout.
 * @param msec Time in milliseconds.
 * @returns
 */
export declare function waitPromise(msec: number): Promise<void>;
/**
 * Capitalize a string.
 * @param text
 * @returns
 */
export declare function ucfirst(text: string): string;
/**
 * Check that numeric values are closer than ZERO_CENTS apart.
 * @param value1
 * @param value2
 */
export declare function near(value1: number, value2: number): boolean;
/**
 * Check that value is lesser than other within ZERO_CENTS margin.
 * @param value1
 * @param value2
 * @returns
 */
export declare function less(value1: number, value2: number): boolean;
/**
 * Check that value is belown zero more than ZERO_CENTS margin.
 * @param value1
 * @param value2
 * @returns
 */
export declare function realNegative(value: number): boolean;
/**
 * Check that value is belown zero more than ZERO_CENTS margin.
 * @param value1
 * @param value2
 * @returns
 */
export declare function realPositive(value: number): boolean;

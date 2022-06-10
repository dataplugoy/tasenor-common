/**
 * Common utilities.
 *
 * @module tasenor-common/src/utils
 */

import { ZERO_CENTS } from "./constants"

/**
 * Check if the current environment is a browser.
 * @returns Boolean.
 */
export function isUi(): boolean {
  return typeof window !== 'undefined'
}

/**
 * Check if the current environment is Node.
 * @returns Boolean.
 */
export function isNode(): boolean {
  return !isUi()
}

/**
 * A promise to resolve after the given timeout.
 * @param msec Time in milliseconds.
 * @returns
 */
export async function waitPromise(msec: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, msec)
  })
}

/**
 * Capitalize a string.
 * @param text
 * @returns
 */
export function ucfirst(text: string): string {
  return text[0].toUpperCase() + text.substr(1)
}

/**
 * Check that numeric values are closer than ZERO_CENTS apart.
 * @param value1
 * @param value2
 */
export function near(value1: number, value2: number): boolean {
  return Math.abs(value1 - value2) < ZERO_CENTS
}

/**
 * Check that value is lesser than other within ZERO_CENTS margin.
 * @param value1
 * @param value2
 * @returns
 */
export function less(value1: number, value2: number): boolean {
  return value1 < value2 && !near(value2 - value1, 0)
}

/**
 * Check that value is belown zero more than ZERO_CENTS margin.
 * @param value1
 * @param value2
 * @returns
 */
export function realNegative(value: number): boolean {
  return less(value, 0)
}

/**
 * Check that value is belown zero more than ZERO_CENTS margin.
 * @param value1
 * @param value2
 * @returns
 */
export function realPositive(value: number): boolean {
  return less(0, value)
}

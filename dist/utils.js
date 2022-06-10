"use strict";
/**
 * Common utilities.
 *
 * @module tasenor-common/src/utils
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.realPositive = exports.realNegative = exports.less = exports.near = exports.ucfirst = exports.waitPromise = exports.isNode = exports.isUi = void 0;
const constants_1 = require("./constants");
/**
 * Check if the current environment is a browser.
 * @returns Boolean.
 */
function isUi() {
    return typeof window !== 'undefined';
}
exports.isUi = isUi;
/**
 * Check if the current environment is Node.
 * @returns Boolean.
 */
function isNode() {
    return !isUi();
}
exports.isNode = isNode;
/**
 * A promise to resolve after the given timeout.
 * @param msec Time in milliseconds.
 * @returns
 */
async function waitPromise(msec) {
    return new Promise(resolve => {
        setTimeout(resolve, msec);
    });
}
exports.waitPromise = waitPromise;
/**
 * Capitalize a string.
 * @param text
 * @returns
 */
function ucfirst(text) {
    return text[0].toUpperCase() + text.substr(1);
}
exports.ucfirst = ucfirst;
/**
 * Check that numeric values are closer than ZERO_CENTS apart.
 * @param value1
 * @param value2
 */
function near(value1, value2) {
    return Math.abs(value1 - value2) < constants_1.ZERO_CENTS;
}
exports.near = near;
/**
 * Check that value is lesser than other within ZERO_CENTS margin.
 * @param value1
 * @param value2
 * @returns
 */
function less(value1, value2) {
    return value1 < value2 && !near(value2 - value1, 0);
}
exports.less = less;
/**
 * Check that value is belown zero more than ZERO_CENTS margin.
 * @param value1
 * @param value2
 * @returns
 */
function realNegative(value) {
    return less(value, 0);
}
exports.realNegative = realNegative;
/**
 * Check that value is belown zero more than ZERO_CENTS margin.
 * @param value1
 * @param value2
 * @returns
 */
function realPositive(value) {
    return less(0, value);
}
exports.realPositive = realPositive;
//# sourceMappingURL=utils.js.map
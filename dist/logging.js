"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.debug = exports.unmute = exports.mute = exports.error = exports.warning = exports.note = exports.log = exports.timestamp = void 0;
/**
 * General purpose logging and debugging interface for all Tasenor code.
 *
 * @module tasenor-common/src/logging
 */
const dayjs_1 = __importDefault(require("dayjs"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
const utils_1 = require("./utils");
dayjs_1.default.extend(utc_1.default);
let muted = false;
const colors = !(0, utils_1.isUi)();
// Which channels are on?
const debugChannels = () => {
    return (0, utils_1.isUi)() ? {
        STOCK: 'DEBUG_STOCK' in window && window['DEBUG_STOCK'] === 'yes',
        BALANCE: 'DEBUG_BALANCE' in window && window['DEBUG_BALANCE'] === 'yes',
        RULES: 'DEBUG_RULES' in window && window['DEBUG_RULES'] === 'yes',
        SEGMENTATION: 'DEBUG_SEGMENTATION' in window && window['DEBUG_SEGMENTATION'] === 'yes',
        CLASSIFICATION: 'DEBUG_CLASSIFICATION' in window && window['DEBUG_CLASSIFICATION'] === 'yes',
        ANALYSIS: 'DEBUG_ANALYSIS' in window && window['DEBUG_ANALYSIS'] === 'yes',
        EXECUTION: 'DEBUG_EXECUTION' in window && window['DEBUG_EXECUTION'] === 'yes'
    } : {
        STOCK: process.env.DEBUG_STOCK === 'yes' || false,
        BALANCE: process.env.DEBUG_BALANCE === 'yes' || false,
        RULES: process.env.DEBUG_RULES === 'yes' || false,
        SEGMENTATION: process.env.DEBUG_SEGMENTATION === 'yes' || false,
        CLASSIFICATION: process.env.DEBUG_CLASSIFICATION === 'yes' || false,
        ANALYSIS: process.env.DEBUG_ANALYSIS === 'yes' || false,
        EXECUTION: process.env.DEBUG_EXECUTION === 'yes' || false
    };
};
let channelsDisplayed = false;
function displayChannels() {
    if (channelsDisplayed)
        return;
    channelsDisplayed = true;
    const channels = debugChannels();
    if (Object.values(channels).filter(flag => flag).length === 0) {
        return;
    }
    for (const channel of ['STOCK', 'RULES', 'SEGMENTATION', 'CLASSIFICATION', 'ANALYSIS', 'EXECUTION']) {
        console.log(`\u001b[93mDEBUG_${channel} = ${channels[channel] ? 'yes' : 'no'}\u001b[0m`);
    }
}
/**
 * Check if the logging is muted.
 * @returns
 */
function isMuted() {
    if ((0, utils_1.isUi)()) {
        return !('DEBUG' in window);
    }
    return muted;
}
/**
 * Construct UTC timestamp to display for logs.
 * @param stamp
 * @returns
 */
function timestamp(stamp = new Date()) {
    if ((0, utils_1.isUi)())
        return dayjs_1.default.utc(stamp).format('HH:mm:ss');
    return dayjs_1.default.utc(stamp).format('YYYY-MM-DDTHH:mm:ssZ');
}
exports.timestamp = timestamp;
function ansi(color) {
    if (!colors) {
        return '';
    }
    switch (color) {
        case 'info':
            return '\u001b[32m';
        case 'note':
            return '\u001b[33m';
        case 'warning':
            return '\u001b[34m';
        case 'error':
            return '\u001b[31m';
        case 'reset':
            return '\u001b[0m';
    }
}
/**
 * Log informative line to the console.
 * @param args
 */
// eslint-disable-next-line
function log(...args) {
    if (isMuted())
        return;
    console.log(ansi('info') + timestamp(), ...args, ansi('reset'));
}
exports.log = log;
/**
 * Log informative line with notification color to the console.
 * @param args
 */
// eslint-disable-next-line
function note(...args) {
    if (isMuted())
        return;
    console.log(ansi('note') + timestamp(), ...args, ansi('reset'));
}
exports.note = note;
/**
 * Log warning line to the console.
 * @param args
 */
// eslint-disable-next-line
function warning(...args) {
    if (isMuted())
        return;
    console.warn(ansi('warning') + timestamp(), ...args, ansi('reset'));
}
exports.warning = warning;
/**
 * Log error line to the console.
 * @param args
 */
// eslint-disable-next-line
function error(...args) {
    if (isMuted())
        return;
    console.error(ansi('error') + timestamp(), ...args, ansi('reset'));
}
exports.error = error;
/**
 * Silence all logging (for testi runs mainly).
 */
function mute() {
    muted = true;
}
exports.mute = mute;
/**
 * Restore normal logging after silencing.
 */
function unmute() {
    muted = false;
}
exports.unmute = unmute;
/**
 * Dump values if debug channel is enabled.
 * @param channel
 * @param args
 */
function debug(channel, ...args) {
    displayChannels();
    const channels = debugChannels();
    if (!channels[channel]) {
        return;
    }
    const allString = args.every(arg => typeof arg === 'string' || typeof arg === 'number' || typeof arg === 'boolean' || arg === null);
    if (allString) {
        console.log('\u001b[35m' + args.join(' ') + '\u001b[0m');
    }
    else {
        for (const arg of args) {
            console.dir(arg, { depth: null, maxArrayLength: null });
        }
    }
}
exports.debug = debug;
//# sourceMappingURL=logging.js.map
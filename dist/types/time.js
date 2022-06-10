"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.month = exports.YEARS = exports.DAYS = exports.HOURS = exports.MINUTES = exports.isShortDate = void 0;
function isShortDate(s) {
    return typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s);
}
exports.isShortDate = isShortDate;
// Seconds in a minute.
exports.MINUTES = 60;
// Seconds in an hour.
exports.HOURS = exports.MINUTES * 60;
// Seconds in a day.
exports.DAYS = exports.HOURS * 24;
// Seconds in an year.
exports.YEARS = exports.DAYS * 365;
/**
 * Convert short month text to long.
 * @param abbrev
 */
function month(abbrev) {
    const months = {
        jan: 'January',
        feb: 'February',
        mar: 'March',
        apr: 'April',
        may: 'May',
        jun: 'June',
        jul: 'July',
        aug: 'August',
        sep: 'September',
        oct: 'October',
        nov: 'November',
        dec: 'December',
    };
    return months[abbrev.toLowerCase()] || null;
}
exports.month = month;
//# sourceMappingURL=time.js.map
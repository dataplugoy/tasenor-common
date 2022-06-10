"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.latestVersion = exports.versionCompare = exports.isVersion = exports.isCurrency = exports.currencies = exports.isLanguage = exports.languages = void 0;
exports.languages = new Set([
    'aa', 'ab', 'af', 'ak', 'am', 'an', 'ar', 'as', 'av', 'ay', 'az', 'ba', 'be', 'bg', 'bh', 'bi', 'bm', 'bn', 'bo', 'br', 'bs', 'ca', 'ce', 'ch', 'co', 'cr', 'cs', 'cu', 'cv', 'cy', 'da', 'de', 'dv', 'dz', 'ee', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fa', 'ff', 'fi', 'fj', 'fo', 'fr', 'fy', 'ga', 'gd', 'gl', 'gn', 'gu', 'gv', 'ha', 'he', 'hi', 'ho', 'hr', 'ht', 'hu', 'hy', 'hz', 'ia', 'id', 'ie', 'ig', 'ii', 'ik', 'io', 'is', 'it', 'iu', 'ja', 'jv', 'kg', 'ki', 'kj', 'kk', 'kl', 'km', 'kn', 'ko', 'kr', 'ks', 'ku', 'kv', 'kw', 'ky', 'la', 'lb', 'lg', 'li', 'ln', 'lo', 'lt', 'lv', 'mg', 'mh', 'mi', 'mk', 'ml', 'mn', 'mo', 'mr', 'ms', 'mt', 'my', 'na', 'nd', 'ne', 'ng', 'nl', 'nn', 'no', 'nr', 'nv', 'ny', 'oc', 'oj', 'om', 'or', 'os', 'pa', 'pi', 'pl', 'ps', 'pt', 'qu', 'rm', 'rn', 'ro', 'ru', 'rw', 'sa', 'sc', 'sd', 'sg', 'sh', 'si', 'sk', 'sl', 'sm', 'sn', 'so', 'sq', 'sr', 'ss', 'st', 'su', 'sv', 'sw', 'ta', 'te', 'tg', 'th', 'ti', 'tk', 'tl', 'tn', 'to', 'tr', 'ts', 'tt', 'tw', 'ty', 'ug', 'ur', 've', 'vi', 'vo', 'wa', 'wo', 'xh', 'yi', 'yo', 'za', 'zh', 'zu'
]);
function isLanguage(s) {
    return typeof s === 'string' && exports.languages.has(s);
}
exports.isLanguage = isLanguage;
exports.currencies = new Set([
    'AFN', 'ALL', 'DZD', 'ARS', 'AMD', 'AUD', 'AZN', 'BHD', 'BDT', 'BYN', 'BZD', 'BOB', 'BAM', 'BWP', 'BRL', 'GBP', 'BND', 'BGN', 'BIF', 'KHR', 'CAD', 'CVE', 'XAF', 'CLP', 'CNY', 'COP', 'KMF', 'CDF', 'CRC', 'HRK', 'CZK', 'DKK', 'DJF', 'DOP', 'EGP', 'ERN', 'EEK', 'ETB', 'EUR', 'GEL', 'GHS', 'GTQ', 'GNF', 'HNL', 'HKD', 'HUF', 'ISK', 'INR', 'IDR', 'IRR', 'IQD', 'ILS', 'JMD', 'JPY', 'JOD', 'KZT', 'KES', 'KWD', 'LVL', 'LBP', 'LYD', 'LTL', 'MOP', 'MKD', 'MGA', 'MYR', 'MUR', 'MXN', 'MDL', 'MAD', 'MZN', 'MMK', 'NAD', 'NPR', 'TWD', 'NZD', 'NIO', 'NGN', 'NOK', 'OMR', 'PKR', 'PAB', 'PYG', 'PEN', 'PHP', 'PLN', 'QAR', 'RON', 'RUB', 'RWF', 'SAR', 'RSD', 'SGD', 'SOS', 'ZAR', 'KRW', 'LKR', 'SDG', 'SEK', 'CHF', 'SYP', 'TZS', 'THB', 'TOP', 'TTD', 'TND', 'TRY', 'USD', 'UGX', 'UAH', 'AED', 'UYU', 'UZS', 'VEF', 'VND', 'XOF', 'YER', 'ZMK', 'ZWL'
]);
function isCurrency(s) {
    return typeof s === 'string' && exports.currencies.has(s);
}
exports.isCurrency = isCurrency;
function isVersion(s) {
    return typeof s === 'string' && /^\d+(\.\d+)+$/.test(s);
}
exports.isVersion = isVersion;
function versionCompare(a, b) {
    const verA = a.split('.');
    const verB = b.split('.');
    const N = Math.max(verA.length, verB.length);
    for (let i = 0; i < N; i++) {
        const diff = parseInt(verA[i]) - parseInt(verB[i]);
        if (diff < 0)
            return -1;
        if (diff > 0)
            return 1;
    }
    if (verA.length < verB.length)
        return -1;
    if (verA.length > verB.length)
        return 1;
    return 0;
}
exports.versionCompare = versionCompare;
function latestVersion(versions) {
    if (versions.length === 0) {
        return null;
    }
    let best;
    for (const version of versions) {
        if (!best || versionCompare(version, best) > 0) {
            best = version;
        }
    }
    return best;
}
exports.latestVersion = latestVersion;
//# sourceMappingURL=common.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOKEN_ISSUER = exports.REFRESH_TOKEN_EXPIRY_TIME = exports.TOKEN_EXPIRY_TIME = exports.isLocalUrl = exports.isUrl = void 0;
/**
 * Type definitions related to networking.
 *
 * @module tasenor-common/src/types/net
 */
const time_1 = require("./time");
function isUrl(s) {
    return typeof s === 'string' && /^\w+:/.test(s);
}
exports.isUrl = isUrl;
function isLocalUrl(s) {
    return typeof s === 'string' && !/^\w+:/.test(s);
}
exports.isLocalUrl = isLocalUrl;
// Access token handling
// ---------------------
// Default expiry time for token.
exports.TOKEN_EXPIRY_TIME = 30 * time_1.MINUTES;
// Default expiry time for refresh.
exports.REFRESH_TOKEN_EXPIRY_TIME = exports.TOKEN_EXPIRY_TIME + 10 * time_1.MINUTES;
// Name of the token issuer.
exports.TOKEN_ISSUER = 'Tasenor';
//# sourceMappingURL=net.js.map
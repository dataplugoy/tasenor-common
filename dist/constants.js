"use strict";
/**
 * Fixed universal value definitions.
 *
 * @module tasenor-common/src/constants
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZERO_STOCK = exports.ZERO_CENTS = exports.MAX_UPLOAD_SIZE = exports.MAX_TARGET_ID_LEN = void 0;
/**
 * How many letters in symbol describing targets as its ID.
 */
exports.MAX_TARGET_ID_LEN = 64;
/**
 * Maximum request size for file uploads (1GB).
 */
exports.MAX_UPLOAD_SIZE = 1024 * 1024 * 1024 * 1;
/**
 * A number that is rounded to zero when calculating transaction monetary value.
 */
exports.ZERO_CENTS = 1e-4;
/**
 * A number that is rounded to zero when calculating amount of stock assets.
 */
exports.ZERO_STOCK = 1e-6;
//# sourceMappingURL=constants.js.map
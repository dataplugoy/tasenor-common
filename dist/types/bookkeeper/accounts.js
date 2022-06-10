"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAccountNumber = exports.AccountType = void 0;
/**
 * A type of an account.
 */
var AccountType;
(function (AccountType) {
    AccountType["ASSET"] = "ASSET";
    AccountType["LIABILITY"] = "LIABILITY";
    AccountType["EQUITY"] = "EQUITY";
    AccountType["REVENUE"] = "REVENUE";
    AccountType["EXPENSE"] = "EXPENSE";
    AccountType["PROFIT_PREV"] = "PROFIT_PREV";
    AccountType["PROFIT"] = "PROFIT";
})(AccountType = exports.AccountType || (exports.AccountType = {}));
function isAccountNumber(s) {
    return typeof s === 'string' && /^\d+$/.test(s);
}
exports.isAccountNumber = isAccountNumber;
//# sourceMappingURL=accounts.js.map
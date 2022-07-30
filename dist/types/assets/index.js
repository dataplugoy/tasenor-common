"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAccountAddress = exports.isAssetTransfer = exports.isStockChangeData = exports.isStockChangeFixed = exports.isStockChangeDelta = exports.isAssetType = exports.isAssetTransferReason = void 0;
function isAssetTransferReason(s) {
    return typeof s === 'string' && [
        'correction',
        'deposit',
        'distribution',
        'dividend',
        'expense',
        'fee',
        'forex',
        'income',
        'investment',
        'loss',
        'profit',
        'tax',
        'trade',
        'transfer',
        'withdrawal',
    ].includes(s);
}
exports.isAssetTransferReason = isAssetTransferReason;
function isAssetType(s) {
    return typeof s === 'string' && ['account', 'stock', 'short', 'currency', 'debt', 'crypto', 'external', 'statement', 'other'].includes(s);
}
exports.isAssetType = isAssetType;
function isStockChangeDelta(o) {
    return typeof o === 'object' && o !== null && ('stock' in o) && ('change' in o['stock']);
}
exports.isStockChangeDelta = isStockChangeDelta;
function isStockChangeFixed(o) {
    return typeof o === 'object' && o !== null && ('stock' in o) && ('set' in o['stock']);
}
exports.isStockChangeFixed = isStockChangeFixed;
function isStockChangeData(o) {
    return isStockChangeDelta(o) || isStockChangeFixed(o);
}
exports.isStockChangeData = isStockChangeData;
function isAssetTransfer(s) {
    return (typeof s === 'object' && s !== null && 'reason' in s && 'type' in s && 'asset' in s
        && s['reason'] && s['type'] && s['asset']);
}
exports.isAssetTransfer = isAssetTransfer;
function isAccountAddress(obj) {
    if (typeof obj !== 'string' || !/^[a-z]+\.[a-z]+\.[*a-z]+$/.test(obj))
        return false;
    const [reason, type] = obj.split('.');
    return isAssetTransferReason(reason) && isAssetType(type);
}
exports.isAccountAddress = isAccountAddress;
__exportStar(require("./TransactionApplyResults"), exports);
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortTransactions = void 0;
/**
 * Sort transactions so that their entries are sorted by account number and transactions by their date.
 * @param txs
 * @returns
 */
function sortTransactions(txs) {
    for (const tx of txs) {
        tx.entries = tx.entries.sort((a, b) => a.account === b.account ? 0 : (a.account < b.account ? -1 : 1));
    }
    return txs.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}
exports.sortTransactions = sortTransactions;
//# sourceMappingURL=transactions.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionApplyResults = void 0;
/**
 * A resulting data from imported transaction execution.
 */
class TransactionApplyResults {
    constructor() {
        this.created = 0;
        this.duplicates = 0;
        this.ignored = 0;
        this.accounts = {};
    }
    /**
     * Add transaction as created.
     * @param tx
     */
    create(tx) {
        this.created++;
        this.record(tx);
    }
    /**
     * Add transaction as created.
     * @param tx
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ignore(tx) {
        this.ignored++;
    }
    /**
     * Add transaction as duplicate.
     * @param tx
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    duplicate(tx) {
        this.duplicates++;
    }
    /**
     * Record changes from the transaction.
     * @param tx
     */
    record(tx) {
        for (const entry of tx.entries) {
            const { account, amount } = entry;
            this.accounts[account] = (this.accounts[account] || 0) + amount;
        }
    }
    /**
     * Combine results from the other result set.
     * @param result
     */
    add(result) {
        if ('created' in result) {
            this.created += parseInt(result.created || '0');
        }
        if ('duplicates' in result) {
            this.duplicates += parseInt(result.duplicates || '0');
        }
        if ('ignored' in result) {
            this.ignored += parseInt(result.ignored || '0');
        }
        if ('accounts' in result) {
            const accounts = result.accounts;
            Object.keys(accounts).forEach(account => {
                this.accounts[account] = (this.accounts[account] || 0) + accounts[account];
            });
        }
    }
    /**
     * Collect JSON data of the recordings.
     * @returns
     */
    toJSON() {
        return {
            created: this.created,
            ignored: this.ignored,
            duplicates: this.duplicates,
            accounts: this.accounts
        };
    }
}
exports.TransactionApplyResults = TransactionApplyResults;
//# sourceMappingURL=TransactionApplyResults.js.map
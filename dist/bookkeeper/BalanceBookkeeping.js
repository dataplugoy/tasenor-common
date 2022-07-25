"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceBookkeeping = void 0;
const logging_1 = require("../logging");
const sprintf_js_1 = require("sprintf-js");
/**
 * A class for storing account balance.
 */
class BalanceBookkeeping {
    constructor() {
        this.balance = {};
        this.number = {};
        (0, logging_1.debug)('BALANCE', `Created new balance bookkeeper.`);
    }
    /**
     * Apply initial balances.
     * @param balances
     */
    set(account, value) {
        this.balance[account] = value;
        (0, logging_1.debug)('BALANCE', `Set ${account} ${this.name(account)} initial balance ${(0, sprintf_js_1.sprintf)('%.2f', this.balance[account] / 100)}`);
    }
    /**
     * Set up name and number mapping from process config.
     */
    configureNames(config) {
        Object.keys(config).forEach(key => {
            if (key.startsWith('account.')) {
                this.number[key.substring(8)] = config[key];
            }
        });
    }
    /**
     * Get the real or temporary name for an account.
     * @param account
     */
    name(account) {
        if (!this.number[account]) {
            // warning(`Account ${account} has no name set.`)
        }
        return this.number[account] || `unknown.account.${account}`;
    }
    /**
     * Change the account balance and return new total.
     */
    change(account, change) {
        this.balance[account] = (this.balance[account] || 0) + change;
        (0, logging_1.debug)('BALANCE', `Change ${account} ${this.name(account)} Δ ${change >= 0 ? '+' : ''}${(0, sprintf_js_1.sprintf)('%.2f', change / 100)} ⟹ ${(0, sprintf_js_1.sprintf)('%.2f', this.balance[account] / 100)}`);
        return this.balance[account];
    }
    /**
     * Apply transaction resulting from transfer.
     * @param txEntry
     * @returns
     */
    apply(txEntry) {
        return this.change(txEntry.account, txEntry.amount);
    }
    /**
     * Find the balance for the given account.
     */
    get(account) {
        return this.balance[this.number[account]] || 0;
    }
    /**
     * Get all records.
     */
    summary() {
        const summary = [];
        Object.keys(this.number).forEach((addr) => {
            const [reason, type, asset] = addr.split('.');
            summary.push({
                account: this.number[addr],
                address: addr,
                debtAddress: this.debtAddress(addr),
                balance: this.balance[this.number[addr]],
                mayTakeLoan: this.mayTakeLoan(reason, type, asset)
            });
        });
        return summary;
    }
    /**
     * Check if the account could record debts separately.
     * @param reason
     * @param type
     * @param asset
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    mayTakeLoan(reason, type, asset) {
        return reason !== 'fee' && type === 'currency';
    }
    /**
     * Convert account address to corresponding debt address.
     * @param addr
     */
    debtAddress(addr) {
        const [, type, asset] = addr.split('.');
        return `debt.${type}.${asset}`;
    }
}
exports.BalanceBookkeeping = BalanceBookkeeping;
//# sourceMappingURL=BalanceBookkeeping.js.map
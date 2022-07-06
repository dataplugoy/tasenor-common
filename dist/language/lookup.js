"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.address2sql = exports.conditions = void 0;
const logging_1 = require("../logging");
const types_1 = require("../types");
/**
 * Convert address lookup to condition.
 * @param addr
 * @param options
 * @returns
 */
function conditions(addr, options) {
    const [reason, type, asset] = addr.split('.');
    if (reason === 'debt') {
        if (type === 'currency') {
            // TODO: Or more general creditor instead?
            return { tax: 'OTHER_CREDITORS', currency: asset, plugin: options.plugin };
        }
    }
    if (reason === 'deposit') {
        if (type === 'currency') {
            return { tax: 'CASH', currency: asset, plugin: options.plugin };
        }
        if (type === 'external') {
            return { tax: 'CASH', currency: asset, '!plugin': options.plugin };
        }
    }
    if (reason === 'distribution') {
        return null;
    }
    if (reason === 'dividend') {
        if (type === 'currency') {
            // TODO: How to handle different sub-types of dividend?
            // Maybe we return options from tightest to more general. Then use first match.
            // Or even directly resolve parenthoods here and return list of SQL in order of preference.
            // If more than one match. show them as first in account dropdown.
            return { tax: 'DIVIDEND', currency: asset, plugin: options.plugin };
        }
    }
    if (reason === 'expense') {
        if (type === 'currency') {
            return options.plugin ? { tax: 'CASH', currency: asset, plugin: options.plugin } : null;
        }
        if (type === 'statement') {
            return { type: types_1.AccountType.EXPENSE, tax: asset };
        }
    }
    if (reason === 'fee') {
        if (type === 'currency') {
            return options.plugin ? { tax: 'CASH', currency: asset, plugin: options.plugin } : null;
        }
    }
    if (reason === 'forex') {
        if (type === 'currency') {
            return { tax: 'CASH', currency: asset, plugin: options.plugin };
        }
    }
    if (reason === 'income') {
        if (type === 'currency') {
            return options.plugin ? { tax: 'CASH', currency: asset, plugin: options.plugin } : null;
        }
        if (type === 'statement') {
            return { type: types_1.AccountType.REVENUE, tax: asset };
        }
    }
    if (reason === 'investment') {
        if (type === 'currency') {
            return null;
        }
        if (type === 'statement') {
            return { type: types_1.AccountType.EQUITY, tax: asset, plugin: options.plugin };
        }
    }
    if (reason === 'tax') {
        if (type === 'currency') {
            return null;
        }
        if (type === 'statement') {
            return { type: [types_1.AccountType.LIABILITY, types_1.AccountType.ASSET], tax: asset };
        }
    }
    if (reason === 'trade') {
        if (type === 'currency') {
            return { type: types_1.AccountType.ASSET, tax: 'CASH', currency: asset, plugin: options.plugin };
        }
        if (type === 'stock') {
            return { type: types_1.AccountType.ASSET, tax: 'CURRENT_PUBLIC_STOCK_SHARES', plugin: options.plugin };
        }
        if (type === 'crypto') {
            return { type: types_1.AccountType.ASSET, tax: 'CURRENT_CRYPTOCURRENCIES', plugin: options.plugin };
        }
    }
    if (reason === 'transfer') {
        if (type === 'currency') {
            return { type: types_1.AccountType.ASSET, tax: 'CASH', currency: asset, plugin: options.plugin };
        }
        if (type === 'external') {
            if (asset === 'NEEDS_MANUAL_INSPECTION') {
                return { tax: asset };
            }
            return null;
        }
    }
    if (reason === 'withdrawal') {
        if (type === 'currency') {
            return { tax: 'CASH', currency: asset, plugin: options.plugin };
        }
        // TODO: External.
    }
    const message = `No SQL conversion known for account address '${addr}'.`;
    if (options.strict) {
        throw new Error(message);
    }
    (0, logging_1.warning)(message);
    return null;
}
exports.conditions = conditions;
/**
 * Create SQL expression matching the accounts according to lookup parameters.
 *
 * @param addr
 * @param options
 * @returns
 */
function address2sql(addr, options) {
    const cond = conditions(addr, options);
    if (cond === null) {
        return null;
    }
    const addSql = [];
    if (cond.currency === options.defaultCurrency) {
        addSql.push(`(data->>'currency' = '${cond.currency}' OR data->>'currency' IS NULL)`);
        delete cond.currency;
    }
    if (cond.type) {
        if (typeof cond.type === 'string') {
            addSql.push(`(type = '${cond.type}')`);
        }
        else {
            addSql.push('(' + cond.type.map(t => `type = '${t}'`).join(' OR ') + ')');
        }
        delete cond.type;
    }
    const key2sql = (key) => {
        if (key[0] === '!') {
            return `(data->>'${key.substring(1)}' != '${cond[key]}')`;
        }
        return `(data->>'${key}' = '${cond[key]}')`;
    };
    const sql = Object.keys(cond).map(key => key2sql(key));
    return [...sql, ...addSql].join(' AND ');
}
exports.address2sql = address2sql;
//# sourceMappingURL=lookup.js.map
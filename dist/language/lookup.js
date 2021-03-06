"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.address2sql = exports.conditions = void 0;
const bookkeeper_1 = require("../bookkeeper");
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
            return { code: 'CREDITORS', addChildren: true, currency: asset, plugin: options.plugin };
        }
    }
    if (reason === 'deposit') {
        if (type === 'currency') {
            return { code: 'CASH', addChildren: true, currency: asset, plugin: options.plugin, type: types_1.AccountType.ASSET };
        }
        if (type === 'external') {
            return { code: 'CASH', addChildren: true, currency: asset, '!plugin': options.plugin, type: types_1.AccountType.ASSET };
        }
    }
    if (reason === 'distribution') {
        return null;
    }
    if (reason === 'dividend') {
        if (type === 'currency') {
            return { code: 'DIVIDEND', addChildren: true, currency: asset, plugin: options.plugin };
        }
    }
    if (reason === 'expense') {
        if (type === 'currency') {
            return options.plugin ? { code: 'CASH', addChildren: true, currency: asset, plugin: options.plugin, type: types_1.AccountType.ASSET } : null;
        }
        if (type === 'statement') {
            return { type: types_1.AccountType.EXPENSE, code: asset };
        }
    }
    if (reason === 'fee') {
        if (type === 'currency') {
            return options.plugin ? { code: 'CASH', addChildren: true, currency: asset, plugin: options.plugin, type: types_1.AccountType.ASSET } : null;
        }
    }
    if (reason === 'forex') {
        if (type === 'currency') {
            return { code: 'CASH', currency: asset, plugin: options.plugin };
        }
    }
    if (reason === 'income') {
        if (type === 'currency') {
            return options.plugin ? { code: 'CASH', addChildren: true, currency: asset, plugin: options.plugin, type: types_1.AccountType.ASSET } : null;
        }
        if (type === 'statement') {
            return { type: types_1.AccountType.REVENUE, code: asset };
        }
    }
    if (reason === 'investment') {
        if (type === 'currency') {
            return null;
        }
        if (type === 'statement') {
            return { type: types_1.AccountType.EQUITY, code: asset, plugin: options.plugin };
        }
    }
    if (reason === 'tax') {
        if (type === 'currency') {
            return null;
        }
        if (type === 'statement') {
            return { type: [types_1.AccountType.LIABILITY, types_1.AccountType.ASSET], code: asset };
        }
    }
    if (reason === 'trade') {
        if (type === 'currency') {
            return { type: types_1.AccountType.ASSET, code: 'CASH', addChildren: true, currency: asset, plugin: options.plugin };
        }
        if (type === 'stock') {
            return { type: types_1.AccountType.ASSET, code: 'CURRENT_PUBLIC_STOCK_SHARES', plugin: options.plugin };
        }
        if (type === 'crypto') {
            return { type: types_1.AccountType.ASSET, code: 'CURRENT_CRYPTOCURRENCIES', plugin: options.plugin };
        }
    }
    if (reason === 'transfer') {
        if (type === 'currency') {
            return { type: types_1.AccountType.ASSET, code: 'CASH', addChildren: true, currency: asset, plugin: options.plugin };
        }
        if (type === 'external') {
            if (asset === 'NEEDS_MANUAL_INSPECTION') {
                return { code: asset };
            }
            return null;
        }
    }
    if (reason === 'withdrawal') {
        if (type === 'currency') {
            return { code: 'CASH', addChildren: true, currency: asset, plugin: options.plugin, type: types_1.AccountType.ASSET };
        }
        if (type === 'external') {
            return { code: 'CASH', addChildren: true, currency: asset, '!plugin': options.plugin, type: types_1.AccountType.ASSET };
        }
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
function address2sql(addr, options, knowledge = null) {
    if (knowledge === null) {
        knowledge = new bookkeeper_1.Knowledge();
    }
    const cond = conditions(addr, options);
    if (cond === null) {
        return null;
    }
    const addSql = [];
    // If looking for default currency, it can be also unset.
    if (cond.currency === options.defaultCurrency) {
        addSql.push(`(data->>'currency' = '${cond.currency}' OR data->>'currency' IS NULL)`);
        delete cond.currency;
    }
    // Add condition for type(s).
    if (cond.type) {
        if (typeof cond.type === 'string') {
            addSql.push(`(type = '${cond.type}')`);
        }
        else {
            addSql.push('(' + cond.type.map(t => `type = '${t}'`).join(' OR ') + ')');
        }
        delete cond.type;
    }
    // Allow any children.
    if (cond.addChildren) {
        cond.code = [cond.code, ...knowledge.children(cond.code)];
        delete cond.addChildren;
    }
    // Helper to handle other conditions.
    const key2sql = (key) => {
        if (key[0] === '!') {
            return `(data->>'${key.substring(1)}' != '${cond[key]}')`;
        }
        let values = cond[key];
        if (values instanceof Array) {
            if (values.length > 1) {
                return `(data->>'${key}' IN (${values.map(k => "'" + k + "'").join(', ')}))`;
            }
            values = values[0];
        }
        return `(data->>'${key}' = '${values}')`;
    };
    const sql = Object.keys(cond).map(key => key2sql(key));
    return [...sql, ...addSql].join(' AND ');
}
exports.address2sql = address2sql;
//# sourceMappingURL=lookup.js.map
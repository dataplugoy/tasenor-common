"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knowledge = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
/**
 * A container for static public data collected from plugins.
 */
class Knowledge {
    constructor(init) {
        if (init == undefined) {
            init = {
                income: {
                    root: null,
                    children: {},
                    parents: {},
                },
                expense: {
                    root: null,
                    children: {},
                    parents: {},
                },
                taxTypes: [],
                vat: []
            };
        }
        this.data = init;
    }
    /**
     * Update some or all data of the knowledge base.
     * @param data
     */
    update(data) {
        Object.assign(this.data, data);
    }
    /**
     * Check if the target is income.
     * @param target
     */
    isIncome(target) {
        if (!this.data.income) {
            throw new Error(`Cannot look for income ${target} since no income classification loaded.`);
        }
        return (typeof target === 'string') && (target in this.data.income.parents);
    }
    /**
     * Check if the target is income.
     * @param target
     */
    isExpense(target) {
        if (!this.data.expense) {
            throw new Error(`Cannot look for expense ${target} since no expense classification loaded.`);
        }
        return (typeof target === 'string') && (target in this.data.expense.parents);
    }
    /**
     * Scan tree parents upwards until a value is found from the lookup table.
     * @param id
     * @param table
     * @param tree
     * @returns
     */
    treeLookup(id, table, tree) {
        if (id in table) {
            return table[id];
        }
        if (id in tree.parents) {
            const parent = tree.parents[id];
            if (parent !== undefined) {
                return this.treeLookup(parent, table, tree);
            }
        }
        return null;
    }
    /**
     * Find a VAT definitions for the given data.
     * @param date
     */
    findVatRange(date) {
        if (!this.data.vat) {
            throw new Error(`Cannot look for VAT since no VAT data loaded.`);
        }
        if (!date) {
            date = new Date();
        }
        if (date instanceof Date) {
            date = (0, dayjs_1.default)(date).format('YYYY-MM-DD');
        }
        for (let i = 0; i < this.data.vat.length; i++) {
            const { from, to } = this.data.vat[i];
            if (from <= date && (to === null || date <= to)) {
                return this.data.vat[i];
            }
        }
        return null;
    }
    /**
     * Perform lookup for a VAT.
     * @param target
     */
    vat(target, date) {
        if (!target) {
            return null;
        }
        target = target.replace(/[0-9]+$/, '');
        const vat = this.findVatRange(date);
        if (!vat) {
            return null;
        }
        if (this.isIncome(target)) {
            return this.treeLookup(target, vat.percentage, this.data.income);
        }
        if (this.isExpense(target)) {
            return this.treeLookup(target, vat.percentage, this.data.expense);
        }
        return null;
    }
    /**
     * Construct a table presentation of the all income and expense entries that have setting for VAT.
     * @param date
     */
    vatTable(date) {
        if (!date) {
            date = new Date();
        }
        const vat = this.findVatRange(date);
        if (!vat) {
            return [];
        }
        // Create tree for collecting updates.
        const tree = {};
        Object.entries(this.data.income.parents).forEach(([item, parent]) => {
            const value = item in vat.percentage ? vat.percentage[item] : undefined;
            tree[item] = {
                name: item,
                type: 'income',
                parent,
                children: [],
                handled: false,
                collected: false,
                value
            };
        });
        Object.entries(this.data.expense.parents).forEach(([item, parent]) => {
            const value = item in vat.percentage ? vat.percentage[item] : undefined;
            tree[item] = {
                name: item,
                type: 'expense',
                parent,
                children: [],
                handled: false,
                collected: false,
                value
            };
        });
        // Function to scan a branch all the way to the root unless handled node found first.
        const handle = (id) => {
            if (!tree[id]) {
                throw new Error(`Reference to undefined VAT ID: '${id}''.`);
            }
            if (tree[id].handled) {
                return tree[id].value;
            }
            const parent = tree[id].parent;
            if (parent) {
                const parentValue = handle(parent);
                if (tree[id].value === undefined) {
                    tree[id].value = parentValue;
                }
                tree[parent].children.push(id);
            }
            tree[id].handled = true;
            return tree[id].value;
        };
        // Force handling for all existing values.
        Object.keys(vat.percentage).forEach(id => {
            handle(id);
        });
        // Build a final tree for those that have values.
        const result = [];
        const collect = (id, level = 0) => {
            if (tree[id].collected) {
                return;
            }
            result.push({
                id,
                name: `${tree[id].type}-${id}`,
                level,
                value: tree[id].value
            });
            tree[id].collected = true;
            tree[id].children.forEach(child => collect(child, level + 1));
        };
        Object.keys(tree).forEach(key => {
            if (tree[key].handled && !tree[key].collected) {
                collect(key);
            }
        });
        return result;
    }
    /**
     * Give entry count for each kind of information.
     */
    count() {
        return {
            income: Object.keys(this.data.income.parents).length,
            expense: Object.keys(this.data.expense.parents).length,
            vat: this.data.vat.length
        };
    }
}
exports.Knowledge = Knowledge;
//# sourceMappingURL=Knowledge.js.map
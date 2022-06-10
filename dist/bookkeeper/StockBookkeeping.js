"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockBookkeeping = exports.isAssetStockType = void 0;
const logging_1 = require("../logging");
const assets_1 = require("../types/assets");
const common_1 = require("../types/common");
function isAssetStockType(obj) {
    return typeof obj === 'string' && ['crypto', 'stock', 'currency', 'other'].includes(obj);
}
exports.isAssetStockType = isAssetStockType;
/**
 * A class for storing and lookup for current stock and value of different assets in timeline.
 */
class StockBookkeeping {
    constructor(name = 'No name') {
        this.name = name;
        this.reset();
        (0, logging_1.debug)('STOCK', `[${this.name}]: Created new stock bookkeeper.`);
    }
    /**
     * Nullify data.
     */
    reset() {
        this.stock = {
            crypto: {},
            stock: {},
            currency: {},
            other: {}
        };
    }
    /**
     * Set the fixed value of stock for given time stamp.
     * @param time
     * @param type
     * @param asset
     * @param amount
     * @param value
     */
    set(time, type, asset, amount, value) {
        if (typeof time === 'string') {
            time = new Date(time);
        }
        if (!(asset in this.stock[type])) {
            this.stock[type][asset] = [];
        }
        const stock = this.stock[type][asset] || []; // Fool the compiler.
        stock.push({
            time,
            amount,
            value
        });
        this.stock[type][asset] = stock.sort((a, b) => a.time.getTime() - b.time.getTime());
        (0, logging_1.debug)('STOCK', `[${this.name}] ${time.toISOString()}: Set ${type} ${asset} = ${amount} (${value}).`);
    }
    /**
     * Check if asset has recordings.
     * @param type
     * @param asset
     * @returns
     */
    has(type, asset) {
        return isAssetStockType(type) ? asset in this.stock[type] : false;
    }
    /**
     * Get the last entry for asset.
     * @param type
     * @param asset
     */
    last(type, asset) {
        const stock = this.stock[type][asset] || []; // Fool the compiler.
        if (!stock || !stock.length) {
            throw new Error(`There is no asset ${asset} of ${type} in stock bookkeeping.`);
        }
        return stock[stock.length - 1];
    }
    /**
     * Append a change in value for an asset.
     * @param time
     * @param type
     * @param asset
     * @param amount
     * @param delta
     */
    change(time, type, asset, amount, value) {
        const originalAmount = amount;
        const originalValue = value;
        if (typeof time === 'string') {
            time = new Date(time);
        }
        if (!this.has(type, asset)) {
            this.set(time, type, asset, amount, value);
        }
        else {
            const last = this.last(type, asset);
            if (time < last.time) {
                (0, logging_1.debug)('STOCK', this.stock);
                throw new Error(`Cannot insert ${type} ${asset} at ${time.toISOString()}, since last timestamp is ${last.time.toISOString()}`);
            }
            amount += last.amount;
            value += last.value;
            const stock = this.stock[type][asset] || []; // Fool the compiler.
            stock.push({
                time,
                amount,
                value
            });
            (0, logging_1.debug)('STOCK', `[${this.name}] ${time.toISOString()}: Change ${type} ${asset} Δ ${originalAmount >= 0 ? '+' : ''}${originalAmount} (${originalValue >= 0 ? '+' : ''}${originalValue}) ⇒ ${amount} ${asset} (${value})`);
        }
    }
    /**
     * Find the stock at the given timestamp.
     * @param time
     * @param type
     * @param asset
     */
    get(time, type, asset) {
        let i;
        const stock = this.stock[type][asset] || [];
        if (this.has(type, asset)) {
            i = stock.length - 1;
        }
        else {
            i = -1;
        }
        while (i >= 0 && stock[i].time > time) {
            i--;
        }
        return i < 0 ? {
            time,
            amount: 0.0,
            value: 0.0
        } : stock[i];
    }
    /**
     * Try to figure out asset type based on common knowledge and what we have currently.
     * @param asset
     */
    getType(asset) {
        if ((0, common_1.isCurrency)(asset)) {
            return 'currency';
        }
        if (this.stock.crypto[asset]) {
            return 'crypto';
        }
        if (this.stock.stock[asset]) {
            return 'stock';
        }
        return 'other';
    }
    /**
     * Apply stock change data used in transaction asset bookkeeping.
     * @param data
     */
    apply(time, data) {
        if (typeof time === 'string') {
            time = new Date(time);
        }
        if ((0, assets_1.isStockChangeFixed)(data)) {
            Object.keys(data.stock.set).forEach(asset => {
                const { amount, value } = data.stock.set[asset];
                this.set(time, this.getType(asset), asset, amount, value);
            });
        }
        if ((0, assets_1.isStockChangeDelta)(data)) {
            Object.keys(data.stock.change).forEach(asset => {
                const { amount, value } = data.stock.change[asset];
                this.change(time, this.getType(asset), asset, amount, value);
            });
        }
    }
    /**
     * Apply multiple stock change data entries at once.
     * @param data
     */
    applyAll(data) {
        data.forEach((entry) => this.apply(entry.time, entry.data));
    }
    /**
     * Get the list of changed asset names in the given stock change data.
     * @param data
     */
    changedAssets(data) {
        const assets = new Set();
        if ((0, assets_1.isStockChangeDelta)(data)) {
            Object.keys(data.stock.change).forEach(asset => assets.add(asset));
        }
        if ((0, assets_1.isStockChangeFixed)(data)) {
            Object.keys(data.stock.set).forEach(asset => assets.add(asset));
        }
        return [...assets];
    }
    /**
     * Collect all assets that has recordings.
     */
    assets() {
        const ret = [];
        Object.keys(this.stock).map(type => Object.keys(this.stock[type]).forEach(asset => ret.push([type, asset])));
        return ret;
    }
    /**
     * Collect the latest totals of all assets.
     */
    totals() {
        return this.assets().map(([type, asset]) => [type, asset, this.last(type, asset).amount]);
    }
    /**
     * Get the latest total of one asset.
     * @param type
     * @param asset
     * @returns
     */
    total(type, asset = undefined) {
        if (!asset) {
            asset = type;
            type = this.getType(asset);
        }
        return this.has(type, asset) ? this.last(type, asset).amount : 0.0;
    }
    /**
     * Collect full stock summary.
     */
    summary(roundToZero = null, addType = true, addTime = true) {
        const result = {};
        if (addType) {
            // With type.
            for (const [type, asset] of this.assets()) {
                result[`${type}.${asset}`] = this.last(type, asset);
                if (!addTime) {
                    delete result[`${type}.${asset}`].time;
                }
                if (roundToZero) {
                    if (Math.abs(result[`${type}.${asset}`].amount) < roundToZero) {
                        delete result[`${type}.${asset}`];
                    }
                }
            }
        }
        else {
            // Without type.
            for (const [type, asset] of this.assets()) {
                result[asset] = this.last(type, asset);
                if (!addTime) {
                    delete result[asset].time;
                }
                if (roundToZero) {
                    if (Math.abs(result[asset].amount) < roundToZero) {
                        delete result[asset];
                    }
                }
            }
        }
        return result;
    }
    /**
     * Gather simple summary per ticker.
     */
    toJSON() {
        const sum = {};
        for (const [, asset, amount] of this.totals()) {
            sum[asset] = (sum[asset] || 0) + amount;
        }
        return sum;
    }
}
exports.StockBookkeeping = StockBookkeeping;
//# sourceMappingURL=StockBookkeeping.js.map
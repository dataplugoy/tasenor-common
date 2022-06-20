/**
 * Type definitions for asset managament.
 *
 * @module tasenor-common/src/types/assets
 */
import { SegmentId } from 'interactive-elements';
import Opaque from 'ts-opaque';
import { Expression } from '../..';
import { Tag, Transaction } from '../bookkeeper';
import { Currency } from '../common';
import { ExpenseSink } from '../expense';
import { IncomeSource } from '../income';
/**
 * An asset denoting some particular crypto currency ticker.
 */
export declare type CryptoCurrency = Opaque<string, 'CryptoCurrency'>;
/**
 * A string describing a type of tax handled in transfer.
 */
export declare type VATTaxType = 'VAT_RECEIVABLE' | 'VAT_PAYABLE' | 'VAT_FROM_PURCHASES' | 'VAT_FROM_SALES';
export declare type TaxType = VATTaxType | 'CORPORATE_TAX' | 'PENALTY_OF_DELAY' | 'WITHHOLDING_TAX';
/**
 * A string describing a stock asset.
 */
export declare type StockTicker = Opaque<string, 'StockTicker'>;
/**
 * A symbol denoting some tradable asset like a stock ticker.
 */
export declare type TradeableAsset = CryptoCurrency | StockTicker;
/**
 * A symbol denoting any asset.
 *
 * Asset is one of the following:
 * * For *currency* it is ISO 3-letter currency code.
 * * For *cryptocurrency* it is commonly used letter code for the crypto asset.
 * * For *stocks* it is the ticker code used by the exchnage. It may not be uniquely defined,
 *   since sometimes it depends on exchange.
 * * For *income* it is a code of the income source. See {@link IncomeSource}.
 * * For *expense* it is a code of the expense sink. See {@link ExpenseSink}.
 * * For *tax* it is a code of the tax. See {@link TaxType}.
 */
export declare type Asset = Currency | TradeableAsset | IncomeSource | ExpenseSink | TaxType;
/**
 * A fundamental reason describing one atomic piece of an asset transfer.
 *
 * - `correction` - A transfer is fix some existing mistake.
 * - `deposit` - A transfer of an asset like currency to the some particular service provider.
 * - `distribution` - An expense that is caused by the company itself disributing money to owners.
 * - `dividend` - An income that is caused by distribution by a company.
 * - `expense` - General expense.
 * - `fee` - A specific cost that is paid to execute some transfer.
 * - `forex` - Special case of the `trade` where assets exchanged are currencies.
 * - `income` - General income.
 * - `investment` - Money coming to the company via some form of invested capital.
 * - `loss` - An expense caused by trading an asset with lower price than it was bought.
 * - `profit` - An income caused by trading an asset with higher price than it was bought.
 * - `tax` - An expense that is considered as a tax.
 * - `trade` - Some asset has been exchanged to another asset.
 * - `transfer` - Any neutral transfer of an asset from one service provider to another service provider.
 * - `withdrawal` - - A transfer of an asset like currency from some particular service provider.
 */
export declare type AssetTransferReason = 'correction' | 'deposit' | 'distribution' | 'dividend' | 'expense' | 'fee' | 'forex' | 'income' | 'investment' | 'loss' | 'profit' | 'tax' | 'trade' | 'transfer' | 'withdrawal';
export declare function isAssetTransferReason(s: unknown): s is AssetTransferReason;
/**
 * A place where assets can be traded.
 */
export declare type AssetExchange = Opaque<string, 'AssetExchange'>;
/**
 * Primary classification of the asset itself or describing counterpart of the transfer.
 * * `stock` - An instrument tradeable in the stock exchange.
 * * `short` - A short position of the tradable instrument.
 * * `currency` - Fiat money.
 * * `debt` - A debt recording for a currency account.
 * * `crypto` - Crypto money.
 * * `external` - External unknown source or destination used in deposits and withdrawals.
 * * `statement` - Entry for income and expense statement purposes.
 * * `other` - Anything else.
 */
export declare type AssetType = 'stock' | 'short' | 'currency' | 'debt' | 'crypto' | 'external' | 'statement' | 'other';
export declare function isAssetType(s: unknown): s is AssetType;
/**
 * A pair of asset amount and its value. Can be used both delta or actual value.
 */
export declare type StockValueData = {
    amount: number;
    value: number;
};
/**
 * A description how asset values and amounts has changed.
 */
export declare type StockChangeDelta = {
    stock: {
        change: Partial<Record<Asset, StockValueData>>;
    };
};
export declare function isStockChangeDelta(o: unknown): o is StockChangeDelta;
/**
 * A fixed description of the assets in stock.
 */
export declare type StockChangeFixed = {
    stock: {
        set: Partial<Record<Asset, StockValueData>>;
    };
};
export declare function isStockChangeFixed(o: unknown): o is StockChangeFixed;
/**
 * A description of asset situation either as fixed number or change since the previous.
 */
export declare type StockChangeData = StockChangeDelta | StockChangeFixed;
export declare function isStockChangeData(o: unknown): o is StockChangeData;
/**
 * A map of valuation rates for assets.
 */
export declare type AssetRates = Partial<Record<Asset, number>>;
/**
 * Collection of asset valuation rates.
 */
export declare type AssetRatesData = {
    rates: AssetRates;
};
/**
 * Additional optional information of the transfer. This data is passed to the transaction itself.
 * These values are also available on text construction during the input.
 *
 * * `asset` - Asset related to event, if not part of the transfer specification itself.
 * * `count` - A number telling some count like participating number of assets.
 * * `currency` - Related currency, if not asset itself.
 * * `currencyValue` - Transfer value in related currency * 100.
 * * `feeAmount` - Amount of fee collected, if used some other currency.
 * * `feeCurrency` - An asset used to collect the fee.
 * * `notes` - An array of additional information to be added as comma separated list in parenthesis to the description.
 * * `perAsset` - A value describing something as per a single asset.
 * * `rates` - Value of assets in default currency as mapping from asset names to conversion multiplier.
 * * `text` - Original text as seen in the imported data.
 * * `vat` - Different VAT percentage to be applied.
 * * `vatValue` - Different VAT to be applied as actual amount of VAT.
 */
export declare type AdditionalTransferInfo = {
    asset?: Asset;
    perAsset?: number;
    count?: number;
    currency?: Currency;
    currencyValue?: number;
    feeAmount?: number;
    feeCurrency?: CryptoCurrency | Currency;
    vat?: number;
    vatValue?: number;
    rates?: AssetRates;
    stock?: {
        set?: Partial<Record<Asset, StockValueData>>;
        change?: Partial<Record<Asset, StockValueData>>;
    };
    text?: string;
    notes?: TransferNote[];
};
/**
 * Extra notes for transaction description.
 *
 * Can be also undefined and null. Those as well as empty strings are removed automatically.
 */
export declare type TransferNote = string | null | undefined;
/**
 * An asset transfer decription used when analysing import data.
 *
 * For some combinations amount is not required, since it is automatically calculated.
 * A conditional expression can be used in rules to specify if this is excluded under
 * certain condition, i.e. `if` expression is given and evaluates to false.
 */
export declare type AssetTransfer = {
    segmentId?: SegmentId;
    reason: AssetTransferReason;
    amount?: number;
    type: AssetType;
    asset: Asset;
    value?: number;
    tags?: Tag[];
    text?: string;
    data?: AdditionalTransferInfo;
    if?: Expression;
};
export declare function isAssetTransfer(s: unknown): s is AssetTransfer;
/**
 * A description what happens in the imported data.
 */
export declare type TransactionDescription = {
    type: 'transfers';
    transfers: AssetTransfer[];
    transactions?: Transaction[];
};
/**
 * Basic classification of different financial transactions.
 */
export declare type TransactionKind = 'correction' | 'buy' | 'dividend' | 'distribution' | 'expense' | 'forex' | 'investment' | 'sell' | 'trade' | 'short-sell' | 'short-buy' | 'withdrawal' | 'deposit' | 'transfer' | 'income' | 'interest' | 'loan' | 'pay' | 'stockdividend' | 'split' | 'tax' | 'error';
/**
 * A generic description of the account describing a purpose of the account.
 *
 * The address is a string `<reason>.<type>.<asset>` separated with dots. A `reason` is am AssetTransferReason,
 * a `type` is an AssetType and `asset` either asset name or '*' to denote any asset.
 */
export declare type AccountAddress = Opaque<string, 'AccountAddress'>;
export declare function isAccountAddress(obj: unknown): obj is AccountAddress;
export * from './TransactionApplyResults';

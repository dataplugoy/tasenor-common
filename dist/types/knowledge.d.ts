/**
 * Type definitions for knowledge base management.
 *
 * @module tasenor-common/src/types/knowledge
 */
import { TaxType } from './assets';
import { ExpenseSink } from './expense';
import { IncomeSource } from './income';
import { ShortDate } from './time';
/**
 * Types that can have some value for VAT percentage.
 */
export declare type VATTarget = ExpenseSink | IncomeSource;
/**
 * A tree structure for fast lookup.
 */
export interface LinkedTree<NodeType extends string | number | symbol | ExpenseSink | IncomeSource = string> {
    root: NodeType | null;
    children: Partial<Record<NodeType, NodeType[]>>;
    parents: Partial<Record<NodeType, NodeType>>;
}
/**
 * An entry describing VATs for various income and expense IDs VAT for date range.
 * For currently valid data, end date `to` is set to null.
 */
export interface VATRange {
    from: ShortDate;
    to: ShortDate | null;
    percentage: Partial<Record<VATTarget, number>>;
}
/**
 * VAT information table organized so that each parent lists their children under them.
 */
export declare type VATTable = {
    id: VATTarget;
    name: string;
    level: number;
    value: number;
}[];
/**
 * Types of knowledge collections.
 */
export declare type KnowledgeType = 'income' | 'expense' | 'vat';
/**
 * A type for complete knowledge base filled by various plugins.
 */
export declare type KnowledgeBase = {
    income: LinkedTree<IncomeSource>;
    expense: LinkedTree<ExpenseSink>;
    taxTypes: TaxType[];
    vat: VATRange[];
};

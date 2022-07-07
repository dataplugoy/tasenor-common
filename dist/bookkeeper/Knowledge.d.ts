import { ExpenseSink, IncomeSource, ShortDate } from '..';
import { LinkedTree, VATTarget, KnowledgeBase, KnowledgeType, KnowledgeNodeType, VATRange, VATTable } from '../types/knowledge';
/**
 * A container for static public data collected from plugins.
 */
export declare class Knowledge {
    private data;
    constructor(init?: KnowledgeBase);
    /**
     * Update some or all data of the knowledge base.
     * @param data
     */
    update(data: Partial<KnowledgeBase>): void;
    /**
     * Check if the target is income.
     * @param target
     */
    isIncome(target: unknown): target is IncomeSource;
    /**
     * Check if the target is income.
     * @param target
     */
    isExpense(target: unknown): target is ExpenseSink;
    /**
     * Scan tree parents upwards until a value is found from the lookup table.
     * @param id
     * @param table
     * @param tree
     * @returns
     */
    treeLookup<T extends string | number | symbol, R>(id: T, table: Partial<Record<T, R>>, tree: LinkedTree<T>): R | null | undefined;
    /**
     * Find a VAT definitions for the given data.
     * @param date
     */
    findVatRange(date?: Date | ShortDate): VATRange | null;
    /**
     * Perform lookup for a VAT.
     * @param target
     */
    vat(target: VATTarget, date?: Date | ShortDate): number | null | undefined;
    /**
     * Construct a table presentation of the all income and expense entries that have setting for VAT.
     * @param date
     */
    vatTable(date?: Date | ShortDate): VATTable;
    /**
     * Give entry count for each kind of information.
     */
    count(): Record<KnowledgeType, number>;
    /**
     * Find the tree where a code belongs to.
     * @param code
     * @returns
     */
    findTree(code: KnowledgeNodeType): LinkedTree<KnowledgeNodeType>;
    /**
     * Resolve recursively all children for the code.
     * @param code
     * @param tree
     * @returns
     */
    children(code: KnowledgeNodeType, tree?: LinkedTree<KnowledgeNodeType> | undefined): KnowledgeNodeType[];
}

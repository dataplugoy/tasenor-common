import { Expression } from "./rules";
/**
 * The mode for rule editor is using currently for editing components.
 */
export type RuleColumnEditMode = null | 'textMatch';
/**
 * Matching mode to display in rule filter rule visualization.
 *
 * Each matching mode defines how the visual presentation is formed for the rule.
 */
export type RuleViewOp = 'caseInsensitiveMatch' | 'caseSensitiveMatch' | 'caseInsensitiveFullMatch' | 'caseSensitiveFullMatch' | 'isLessThan' | 'isGreaterThan' | 'setLiteral' | 'copyInverseField' | 'copyField';
export declare function isRuleViewOp(obj: any): obj is RuleViewOp;
/**
 * Description how the filter expression has been constructed for visual presentation.
 */
export type RuleFilterView = {
    op: RuleViewOp;
    field?: string;
    text?: string;
    value?: number | string;
};
/**
 * Descriptiion how the result expression has been constructed for visual presentation.
 */
export type RuleResultView = {
    reason: {
        op: RuleViewOp;
        field?: string;
        value?: string;
    };
    type: {
        op: RuleViewOp;
        field?: string;
        value?: string;
    };
    asset: {
        op: RuleViewOp;
        field?: string;
        value?: string;
    };
    amount: {
        op: RuleViewOp;
        field?: string;
        value?: string;
    };
    tags?: {
        op: RuleViewOp;
        field?: string;
        value?: string;
    };
    data?: {
        text: {
            op: RuleViewOp;
            field?: string;
            value?: string;
        };
    };
};
export type RuleView = {
    filter: RuleFilterView[];
    result: RuleResultView[];
};
/**
 * Convert a `RuleFilterView` description to the rule expression.
 * @param view
 * @returns
 */
export declare function filterView2rule(view: RuleFilterView | RuleFilterView[]): Expression;
/**
 * Convert a `RuleFilterView` description to the rule name proposal.
 * @param view
 * @returns
 */
export declare function filterView2name(view: RuleFilterView | RuleFilterView[]): string;
/**
 * Convert result view to actual rule expressions.
 * @param view
 * @returns
 */
export declare function filterView2results(view: RuleResultView | RuleResultView[]): any;

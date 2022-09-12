import { Expression } from "./rules";
/**
 * The mode for rule editor is using currently for editing components.
 */
export declare type RuleColumnEditMode = null | 'textMatch';
/**
 * Matching mode to display in rule filter rule visualization.
 *
 * Each matching mode defines how the visual presentation is formed for the rule.
 */
export declare type RuleViewOp = 'caseInsensitiveMatch' | 'caseSensitiveMatch' | 'caseInsensitiveFullMatch' | 'caseSensitiveFullMatch' | 'isLessThan' | 'isGreaterThan' | 'setLiteral' | 'copyInverseField' | 'copyField';
/**
 * Description how the filter expression has been constructed for visual presentation.
 */
export declare type RuleFilterView = {
    op: RuleViewOp;
    field: string;
    text?: string;
    value?: number;
};
/**
 * Descriptiion how the result expression has been constructed for visual presentation.
 */
export declare type RuleResultView = {
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

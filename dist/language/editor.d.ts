/**
 * The mode for rule editor is using currently for editing components.
 */
export declare type RuleColumnEditMode = null | 'textMatch';
/**
 * Matching mode to display in rule filter rule visualization.
 *
 * Each matching mode defines how the visual presentation is formed for the rule.
 */
export declare type RuleViewOp = 'caseInsensitiveMatch';
/**
 * Description how the filter expression has been constructed for visual presentation.
 */
export declare type RuleFilterView = {
    op: RuleViewOp;
    field: string;
    text: string;
};
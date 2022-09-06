import { Expression } from "./rules"

/**
 * The mode for rule editor is using currently for editing components.
 */
export type RuleColumnEditMode = null | 'textMatch'

/**
 * Matching mode to display in rule filter rule visualization.
 *
 * Each matching mode defines how the visual presentation is formed for the rule.
 */
export type RuleViewOp = 'caseInsensitiveMatch' | 'isLessThan' | 'isGreaterThan'

/**
 * Description how the filter expression has been constructed for visual presentation.
 */
export type RuleFilterView = {
  op: RuleViewOp
  field: string
  text?: string
  value?: number
}

/**
 * Convert a `RuleFilterView` description to the rule expression.
 * @param view
 * @returns
 */
export function filterView2rule(view: RuleFilterView | RuleFilterView[]): Expression {
  if (view instanceof Array) {
    return view.map(v => filterView2rule(v)).join(' && ') as Expression
  }
  const { op, field, text, value } = view
  const variable = /^[a-zA-Z]\w*$/.test(field) ? field : '$(' + JSON.stringify(field) + ')'

  switch (op) {
    case 'caseInsensitiveMatch':
      return `(${variable} === ${JSON.stringify(text)})` as Expression
    case 'isLessThan':
      return `(${variable} < ${JSON.stringify(value)})` as Expression
    case 'isGreaterThan':
      return `(${variable} > ${JSON.stringify(value)})` as Expression
    default:
      throw new Error(`A RuleFilterView with operation '${op}' is not implemented.`)
  }
}

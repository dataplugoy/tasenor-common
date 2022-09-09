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
export type RuleViewOp = 'caseInsensitiveMatch' |
  'isLessThan' |
  'isGreaterThan' |
  'setLiteral' |
  'copyInverseField' |
  'copyField'

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
 * Descriptiion how the result expression has been constructed for visual presentation.
 */
export type RuleResultView = {
  reason: {
    op: RuleViewOp,
    field?: string,
    value?: string
  },
  type: {
    op: RuleViewOp,
    field?: string,
    value?: string
  },
  asset: {
    op: RuleViewOp,
    field?: string,
    value?: string
  },
  amount: {
    op: RuleViewOp,
    field?: string,
    value?: string
  },
  tags?: {
    op: RuleViewOp,
    field?: string,
    value?: string
  },
  data?: {
    text: {
      op: RuleViewOp,
      field?: string,
      value?: string
    }
  }
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
      return `(lower(${variable}) === ${JSON.stringify(text?.toLowerCase())})` as Expression
    case 'isLessThan':
      return `(${variable} < ${JSON.stringify(value)})` as Expression
    case 'isGreaterThan':
      return `(${variable} > ${JSON.stringify(value)})` as Expression
    default:
      throw new Error(`A filterView2rule with operation '${op}' is not implemented.`)
  }
}

/**
 * Convert a `RuleFilterView` description to the rule name proposal.
 * @param view
 * @returns
 */
 export function filterView2name(view: RuleFilterView | RuleFilterView[]): string {
  if (view instanceof Array) {
    return view.map(v => filterView2name(v)).join(' and ')
  }
  const { op, field, text, value } = view

  switch (op) {
    case 'caseInsensitiveMatch':
      return `${field} in lower case contains '${text?.toLowerCase()}'`
    case 'isLessThan':
      return `${field} is less than ${value}`
    case 'isGreaterThan':
      return `${field} is greater than ${value}`
    default:
      throw new Error(`A filterView2name with operation '${op}' is not implemented.`)
  }
}

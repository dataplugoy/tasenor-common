import { Value } from '../types/common'

/**
 * This rule is an object of form `{ k_1: v_1, ..., k_N: v_N }` which is interpreted as "All fields `k_i` must have value `v_i`"
 */
export type EqualityRuleShortcut = {
  [key: string]: Value
}

/**
 * All valid filtering rules.
 */
export type FilterRule = null | undefined | EqualityRuleShortcut

/**
 * Definition of the filttering function type.
 */
export type FilterFunction<TargetType=Record<string, unknown> > = (arg: TargetType) => boolean

/**
 * Convert a filterin rule to the funciton executing the rule on the target entity.
 * @param rule A filtering rule.
 * @returns
 */
export function filter2function<TargetType=Record<string, unknown> >(rule: FilterRule): FilterFunction<TargetType> {
  // No rules.
  if (rule === null || rule === undefined) {
    return () => true
  }
  // Field equality rule.
  if (typeof rule === 'object') {
    return (arg: TargetType) => {
      for (const [k, v] of Object.entries(rule)) {
        if (typeof arg !== 'object' || arg === null) {
          return false
        }
        if (arg[k] !== v) {
          return false
        }
      }
      return true
    }
  }
  throw new Error(`Syntax error in filtering rule ${JSON.stringify(rule)}`)
}

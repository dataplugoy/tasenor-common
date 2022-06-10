import { Value } from '../types/common';
/**
 * This rule is an object of form `{ k_1: v_1, ..., k_N: v_N }` which is interpreted as "All fields `k_i` must have value `v_i`"
 */
export declare type EqualityRuleShortcut = {
    [key: string]: Value;
};
/**
 * All valid filtering rules.
 */
export declare type FilterRule = null | undefined | EqualityRuleShortcut;
/**
 * Definition of the filttering function type.
 */
export declare type FilterFunction<TargetType = Record<string, unknown>> = (arg: TargetType) => boolean;
/**
 * Convert a filterin rule to the funciton executing the rule on the target entity.
 * @param rule A filtering rule.
 * @returns
 */
export declare function filter2function<TargetType = Record<string, unknown>>(rule: FilterRule): FilterFunction<TargetType>;

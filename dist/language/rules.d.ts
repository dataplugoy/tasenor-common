import Opaque from 'ts-opaque';
import { AssetTransfer } from '..';
import { TextFileLine } from '../import/TextFileLine';
import { UIQuery } from './query';
import { RuleFilterView, RuleResultView } from './editor';
export declare type Expression = Opaque<string, 'Expression'>;
export declare type RuleValue = number | string | null | false | true | object | Array<RuleValue>;
export declare type RuleVariables = Record<string, RuleValue>;
export declare type ImportRuleResult = Record<Partial<keyof AssetTransfer>, Expression>;
export declare type ImportRule = {
    name: string;
    filter: Expression;
    view?: {
        filter: RuleFilterView[];
        result: RuleResultView[];
    };
    questions?: Record<string, UIQuery>;
    result: ImportRuleResult | ImportRuleResult[];
    examples?: TextFileLine[];
};
/**
 * Failure to parse a rule.
 */
export declare class RuleParsingError extends Error {
    expression: Expression;
    variables: RuleVariables;
    constructor(msg: string, expression: Expression, variables: RuleVariables);
}
/**
 * ## Rules Evaluation Engine
 *
 * The core of the rules engine is based on the [MathJS](https://mathjs.org/docs/expressions/syntax.html).
 *
 * ### Variables
 *
 * Typically a collection of variables are defined for the processing. For example in importing CSV file
 * we have all columns defined as variables. Note that the parser accept wide range of characters to be
 * used in the variable name. Those which cannot be expressed directly, we can use syntax like
 *
 *   `$('Variable with space')`
 *
 * ### Relations
 *
 * In addition to the standard relations, the engine defines comparisons and concatenation for strings.
 *
 * ### Custom Functions
 *
 * These functions are specifically defined for the rules engine:
 *
 * * `$` - {@link RulesEngine.$}
 * * `capitalize` - {@link RulesEngine.capitalize}
 * * `cents` - {@link RulesEngine.cents}
 * * `chosen` - {@link RulesEngine.chosen}
 * * `contains` - {@link RulesEngine.contains}
 * * `d` - {@link RulesEngine.d}
 * * `isCurrency` - {@link RulesEngine.isCurrency}
 * * `join` - {@link RulesEngine.join}
 * * `lower` - {@link RulesEngine.lower}
 * * `num` - {@link RulesEngine.num}
 * * `par` - {@link RulesEngine.par}
 * * `str` - {@link RulesEngine.str}
 * * `rates` - {@link RulesEngine.rates}
 * * `regex` - {@link RulesEngine.regex}
 * * `times` - {@link RulesEngine.times}
 * * `ucfirst` - {@link RulesEngine.ucfirst}
 *
 */
export declare class RulesEngine {
    private engine;
    private scope;
    private variables;
    private quiet;
    constructor(variables?: RuleVariables, quiet?: boolean);
    /**
     * Evaluate a string expression or object with multiple expressions.
     * @param expr
     * @param variables
     * @returns
     */
    eval(expr: Expression | string | object, variables?: RuleVariables): RuleValue;
    /**
     * Access function for columns having spaces or other special characters in their name.
     *
     * **Example**
     *
     * ```typescript
     * $('Column Name')
     * ```
     * @param column
     * @returns
     */
    $(column: string): RuleValue | undefined;
    /**
     * Use heuristic approach to convert string with spaces and possibly delimters to number.
     *
     * **Example**
     *
     * ```typescript
     * num("  12,300.50") // => 12300.50
     * ```
     * @param column
     * @returns
     */
    num(str: string | number): RuleValue | typeof NaN;
    /**
     * Check if the string represents currency.
     *
     * **Example**
     *
     * ```typescript
     * isCurrency("EUR") // => true
     * ```
     * @param str
     * @returns
     */
    isCurrency(str: string): boolean;
    /**
     * Construct rate object for one or more rate.
     *
     * **Example**
     *
     * ```typescript
     * rates("USD", 0.88, "GBP", 1.19) => { "USD": 0.88, "GBP": 1.19 }
     * ```
     * @param args [asset, rate, asset2, rate2,...]
     */
    rates(args: unknown[]): Record<string, RuleValue>;
    /**
     * Test a string against regular expression.
     *
     * **Example**
     *
     * ```typescript
     * regex("[0-9]+", "Foo 123 Bar") // => true
     * regex("([0-9]+)", "Foo 123 Bar") // => ["123"]
     * ```
     * @param re
     * @param compare
     * @returns Either true or false or match groups, if given in the regular expression.
     */
    regex(re: string, compare: string, flags?: string | undefined): boolean | string[];
    /**
     * Check each argument and trim the white space. If anything left, construct a string starting with a space
     * and after that all non-empty parts as comma separated list. If there are no non-empty arguments, return
     * empty string. Also null and false values are dropped.
     *
     * **Example**
     *
     * ```typescript
     * par("  ", "abc", null, "def  ") // => " abc, def"
     * par(false, "   ") // => ""
     * ```
     * @param exprs
     */
    par(...exprs: RuleValue[]): string;
    /**
     * Check the existence of the variable and return it. If not defined, throw an error.
     * @param variable
     */
    var(variable: string): unknown;
    /**
     * Look for actual text of the answer option selected when resolved a variable in the current rule.
     *
     * **Example**
     *
     * @param string
     *
     * If more than one match is found, they are returned comma separated.
     */
    chosen(questionVar: string): string;
    /**
     * Check if the first string contains the second string.
     * @param s
     * @param r
     * @returns
     */
    contains(s: string, r: string): boolean;
    /**
     * Convert first letter to upper case.
     *
     * **Example**
     *
     * ```typescript
     * ucfirst("foo bar") // "Foo bar"
     * ```
     * @param s
     */
    ucfirst(s: string): string;
    /**
     * Convert string to lower case.
     *
     * **Example**
     *
     * ```typescript
     * lower("ABC") // => "abc"
     * ```
     * @param s
     */
    lower(s: string): string;
    /**
     * Capitalize all words.
     *
     * **Example**
     *
     * ```typescript
     * capitalize('no small caps') // => "No Small Caps"
     * ```
     * @param s
     */
    capitalize(s: string): string;
    /**
     * Convert number to cents, i.e. 1/100th, rounding off extra decimals.
     *
     * **Example**
     *
     * ```typescript
     * cents(3.141592) // => 314
     * ```
     * @param n
     * @returns 100 x n as integer.
     */
    cents(n: number): number;
    /**
     * Force conversion of the argument to string.
     * @param x
     * **Example**
     *
     * ```typescript
     * str(undefined) // => "undefined"
     * ```
     */
    str(x: unknown): string;
    /**
     * Join non-empty trimmed argments as a space separated string.
     * @param args
     * **Example**
     *
     * ```typescript
     * join(undefined, 12, null, '  kg') // => "12 kg"
     * ```
     */
    join(...args: unknown[]): string;
    /**
     * Print the arguments to the debug log and return the value of the last argument.
     * @param args
     * @returns
     */
    d(...args: unknown[]): unknown;
    /**
     * Convert numeric multiplier to text.
     * @param count
     * @param target
     * If count is not given, the value is empty string.
     * Otherwise if it is greater than zero the strint `<count> x <targer>` is returned.
     */
    times(count: unknown, target: unknown): string;
}

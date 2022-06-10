"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter2function = void 0;
/**
 * Convert a filterin rule to the funciton executing the rule on the target entity.
 * @param rule A filtering rule.
 * @returns
 */
function filter2function(rule) {
    // No rules.
    if (rule === null || rule === undefined) {
        return () => true;
    }
    // Field equality rule.
    if (typeof rule === 'object') {
        return (arg) => {
            for (const [k, v] of Object.entries(rule)) {
                if (typeof arg !== 'object' || arg === null) {
                    return false;
                }
                if (arg[k] !== v) {
                    return false;
                }
            }
            return true;
        };
    }
    throw new Error(`Syntax error in filtering rule ${JSON.stringify(rule)}`);
}
exports.filter2function = filter2function;
//# sourceMappingURL=filtering.js.map
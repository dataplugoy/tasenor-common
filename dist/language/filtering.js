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
    // Function to verify that the argument is valid for comparison.
    const isValid = (arg) => typeof arg === 'object' || arg !== null;
    // Helper to create function for matching.
    const makeRule = (k, v) => {
        const t = typeof v;
        if (t === 'number' || t === 'string') {
            return (arg) => arg[k] === v;
        }
        if (t === 'object' && v instanceof Array) {
            const s = new Set(v);
            return (arg) => s.has(arg[k]);
        }
        throw new Error(`No interpretation of value ${JSON.stringify(v)} in filtering rule ${JSON.stringify(rule)}.`);
    };
    // Compose a rule from objects.
    if (typeof rule === 'object') {
        const testers = [];
        Object.entries(rule).map(([k, v]) => {
            testers.push(makeRule(k, v));
        });
        return (arg) => {
            if (!isValid(arg))
                return false;
            for (let i = 0; i < testers.length; i++) {
                if (!testers[i](arg)) {
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
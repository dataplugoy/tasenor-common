"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUIQuery = exports.isUIQueryRef = void 0;
function isUIQueryRef(obj) {
    return (typeof obj === 'object' && obj !== null && (Object.keys(obj).length === 1 && Object.keys(obj)[0] === 'name'));
}
exports.isUIQueryRef = isUIQueryRef;
function isUIQuery(obj) {
    return (typeof obj === 'object' && obj !== null && (typeof obj['ask'] === 'object' ||
        (typeof obj['chooseTag'] === 'object' && obj['chooseTag'] instanceof Array)));
}
exports.isUIQuery = isUIQuery;
//# sourceMappingURL=query.js.map
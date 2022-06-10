"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTagConfig = exports.isAccountAddressConfig = void 0;
function isAccountAddressConfig(s) {
    return typeof s === 'string' && /^account\./.test(s);
}
exports.isAccountAddressConfig = isAccountAddressConfig;
function isTagConfig(s) {
    return typeof s === 'string' && /^tags\./.test(s);
}
exports.isTagConfig = isTagConfig;
//# sourceMappingURL=importer.js.map
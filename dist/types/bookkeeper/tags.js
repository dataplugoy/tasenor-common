"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTagType = exports.isTagString = exports.isTag = void 0;
function isTag(s) {
    return typeof s === 'string' && /^[A-Za-z0-9]+$/.test(s);
}
exports.isTag = isTag;
function isTagString(s) {
    if (typeof s !== 'string' || !/^\[\]$/.test(s)) {
        return false;
    }
    const tags = s.substr(1, s.length - 2).split('][');
    return tags.filter(tag => !isTag(tag)).length > 0;
}
exports.isTagString = isTagString;
function isTagType(s) {
    return typeof s === 'string';
}
exports.isTagType = isTagType;
//# sourceMappingURL=tags.js.map
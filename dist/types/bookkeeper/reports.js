"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReportID = void 0;
function isReportID(s) {
    return typeof s === 'string' && /^[-a-z]+$/.test(s);
}
exports.isReportID = isReportID;
//# sourceMappingURL=reports.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.haveKnowledge = exports.haveSettings = exports.haveStore = exports.haveCatalog = exports.haveCursor = exports.setGlobalComponents = void 0;
let _store;
let _catalog;
let _cursor;
let _settings;
let _knowledge;
/**
 * Store instance references for the application.
 * @param store
 * @param catalog
 * @param cursor
 * @param settings
 * @param knowledge
 */
function setGlobalComponents(store, catalog, cursor, settings, knowledge) {
    _store = store;
    _catalog = catalog;
    _cursor = cursor;
    _settings = settings;
    _knowledge = knowledge;
}
exports.setGlobalComponents = setGlobalComponents;
/**
 * Get the store instance.
 */
function haveCursor() {
    if (!_cursor) {
        throw new Error('Call to haveCursor() before global components set with setGlobalComponents().');
    }
    return _cursor;
}
exports.haveCursor = haveCursor;
/**
* Get the catalog instance.
*/
function haveCatalog() {
    if (!_catalog) {
        throw new Error('Call to haveCatalog() before global components set with setGlobalComponents().');
    }
    return _catalog;
}
exports.haveCatalog = haveCatalog;
/**
 * Get the store instance.
 */
function haveStore() {
    if (!_store) {
        throw new Error('Call to haveStore() before global components set with setGlobalComponents().');
    }
    return _store;
}
exports.haveStore = haveStore;
/**
 * Get the catalog instance.
 */
function haveSettings() {
    if (!_settings) {
        throw new Error('Call to haveSettings() before global components set with setGlobalComponents().');
    }
    return _settings;
}
exports.haveSettings = haveSettings;
/**
* Get the catalog knowledge base.
*/
function haveKnowledge() {
    if (!_knowledge) {
        throw new Error('Call to haveKnowledge() before global components set with setGlobalComponents().');
    }
    return _knowledge;
}
exports.haveKnowledge = haveKnowledge;
//# sourceMappingURL=globals.js.map
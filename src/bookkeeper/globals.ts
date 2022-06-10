/**
 * Accessors for Bookkeeper store components.
 * @module
 */
import { Cursor } from "../types/bookkeeper/cursor"
import { Catalog } from "../types/bookkeeper/catalog"
import { Store } from "../types/bookkeeper/store"
import { Settings } from "../types/bookkeeper/settings"
import { Knowledge } from "./Knowledge"

let _store: Store
let _catalog: Catalog
let _cursor: Cursor
let _settings: Settings
let _knowledge: Knowledge

/**
 * Store instance references for the application.
 * @param store
 * @param catalog
 * @param cursor
 * @param settings
 * @param knowledge
 */
export function setGlobalComponents(store: Store, catalog: Catalog, cursor: Cursor, settings: Settings, knowledge: Knowledge): void {
  _store = store
  _catalog = catalog
  _cursor = cursor
  _settings = settings
  _knowledge = knowledge
}

/**
 * Get the store instance.
 */
export function haveCursor(): Cursor {
  if (!_cursor) {
    throw new Error('Call to haveCursor() before global components set with setGlobalComponents().')
  }
  return _cursor
}

/**
* Get the catalog instance.
*/
export function haveCatalog(): Catalog {
  if (!_catalog) {
    throw new Error('Call to haveCatalog() before global components set with setGlobalComponents().')
  }
  return _catalog
}

/**
 * Get the store instance.
 */
export function haveStore(): Store {
  if (!_store) {
    throw new Error('Call to haveStore() before global components set with setGlobalComponents().')
  }
  return _store
}

/**
 * Get the catalog instance.
 */
export function haveSettings(): Settings {
  if (!_settings) {
    throw new Error('Call to haveSettings() before global components set with setGlobalComponents().')
  }
  return _settings
}

/**
* Get the catalog knowledge base.
*/
export function haveKnowledge(): Knowledge {
  if (!_knowledge) {
    throw new Error('Call to haveKnowledge() before global components set with setGlobalComponents().')
  }
  return _knowledge
}

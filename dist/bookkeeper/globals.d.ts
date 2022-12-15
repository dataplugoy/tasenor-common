/**
 * Accessors for Bookkeeper global components and info.
 * @module
 */
import { Cursor } from "../types/bookkeeper/cursor";
import { Catalog } from "../types/bookkeeper/catalog";
import { Store } from "../types/bookkeeper/store";
import { Settings } from "../types/bookkeeper/settings";
import { Knowledge } from "./Knowledge";
import { DirectoryPath } from "../types";
declare global {
    var _serverRoot: DirectoryPath;
    var _store: Store;
    var _catalog: Catalog;
    var _cursor: Cursor;
    var _settings: Settings;
    var _knowledge: Knowledge;
}
/**
 * Store instance references for the application.
 * @param store
 * @param catalog
 * @param cursor
 * @param settings
 * @param knowledge
 */
export declare function setGlobalComponents(store: Store, catalog: Catalog, cursor: Cursor, settings: Settings, knowledge: Knowledge): void;
/**
 * Get the store instance.
 */
export declare function haveCursor(): Cursor;
/**
* Get the catalog instance.
*/
export declare function haveCatalog(): Catalog;
/**
 * Get the store instance.
 */
export declare function haveStore(): Store;
/**
 * Get the catalog instance.
 */
export declare function haveSettings(): Settings;
/**
* Get the catalog knowledge base.
*/
export declare function haveKnowledge(): Knowledge;
/**
 * Set the global server root path.
 */
export declare function setServerRoot(path: string): void;
/**
 * Get the path to the root of the running server.
 */
export declare function getServerRoot(): string;

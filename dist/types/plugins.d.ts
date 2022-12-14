/**
 * Type definitions for plugins.
 *
 * @module tasenor-common/src/types/plugin
 */
import Opaque from 'ts-opaque';
import { Version } from './common';
/**
 * Unique string determining the plugin itself.
 */
export type PluginCode = Opaque<string, 'PluginCode'>;
/**
 * Usage of the plugin either in the backend, ui or both.
 */
export type PluginUse = 'ui' | 'backend' | 'both';
/**
 * Types for plugins usabable in UI.
 */
export type PluginTypeUI = 'language' | 'tool' | 'currency';
/**
 * Types for plugins usabable in backend.
 */
export type PluginTypeBackend = 'import' | 'report' | 'service' | 'scheme' | 'data';
/**
 * Types for plugins usabable in both UI and backend.
 */
export type PluginTypeBoth = 'report';
/**
 * All plugin types.
 */
export type PluginType = PluginTypeUI | PluginTypeBackend | PluginTypeBoth;
/**
 * Description of a plugin.
 */
export interface TasenorPlugin {
    id: number;
    code: PluginCode;
    title: string;
    description: string;
    icon: string;
    version: Version;
    releaseDate: Date;
    use: PluginUse;
    type: PluginType;
    availableVersion?: Version;
    installedVersion?: Version;
    path: string;
}
/**
 * Partial plugin information used during the building etc.
 */
export interface IncompleteTasenorPlugin {
    code: PluginCode;
    title: string;
    description: string;
    icon: string;
    version: Version;
    releaseDate: Date | null;
    use: PluginUse | 'unknown';
    type: PluginType | 'unknown';
    path: string;
}
/**
 * A list of plugins.
 */
export type PluginCatalog = TasenorPlugin[];
/**
 * A version keyed map of change documentation.
 */
export type PluginChangeLog = {
    [Key: string]: string;
};
/**
 * A translation tables for different languages in the plugin.
 */
export type PluginLanguages = {
    [Key: string]: {
        [Key: string]: string;
    };
};
/**
 * A service name provided by service plugins.
 */
export type PluginService = 'historical-currency-rate' | 'historical-crypto-rate';
/**
 * A response message content from the service.
 */
export type PluginServiceResponse = {
    status: number;
    data: unknown;
} | {
    status: number;
    message: string;
};
/**
 * A name of a accounting scheme.
 */
export declare type SchemeName = Opaque<string, 'SchemeName'>;

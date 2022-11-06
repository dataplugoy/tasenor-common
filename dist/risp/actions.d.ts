import { PluginCode } from '../types';
import { RenderingProps } from './rendering';
/**
 * Readability helper to specify that a string is being used as a trigger name.
 */
export declare type ActionName = string;
/**
* Payload of `debug` action.
*/
export interface DebugAction {
    readonly type: 'debug';
}
/**
 * Payload of the `patch` action.
 */
export interface PatchAction {
    readonly type: 'patch';
    url: string;
    objectWrapLevel?: number;
    errorMessage?: string;
    successMessage?: string;
}
export declare function isPatchAction(obj: unknown): obj is PatchAction;
/**
 * Payload of `post` action.
 */
export interface PostAction {
    readonly type: 'post';
    url: string;
    objectWrapLevel?: number;
    errorMessage?: string;
    successMessage?: string;
}
export declare function isPostAction(obj: unknown): obj is PostAction;
/**
* An action for storing a plugin or general settings.
*/
export interface SaveSettingsAction {
    readonly type: 'saveSettings';
    backend?: boolean;
    plugin: PluginCode;
}
/**
 * An action definition containing all Tasenor and RISP actions.
 */
export declare type TasenorAction = DebugAction | PatchAction | PostAction | SaveSettingsAction;
/**
 * An action definition collection.
 */
export interface Actions {
    [key: string]: TasenorAction | TasenorAction[];
}
/**
 * A result retuned by the action handler.
 */
export declare type ActionResult = SuccessfulActionResult | FailedActionResult;
/**
 * A successful result retuned by the action handler.
 */
export interface SuccessfulActionResult {
    success: true;
    result: unknown;
}
/**
 * A failure result retuned by the action handler.
 */
export interface FailedActionResult {
    success: false;
    message: string;
}
/**
 * A function processing an action.
 */
export interface ActionHandler {
    (action: TasenorAction, props: RenderingProps): Promise<ActionResult>;
}

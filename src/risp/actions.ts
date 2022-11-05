import { InteractiveElement } from './elements'
import { RenderingProps } from './rendering'
import { Setup } from './setup'

/**
 * Readability helper to specify that a string is being used as a trigger name.
 */
 export type ActionName = string

 /**
 * Payload of `debug` action.
 */
 export interface DebugAction {
   readonly type: 'debug'
 }

 /**
  * Payload of the `patch` action.
  */
 export interface PatchAction {
   readonly type: 'patch'
   url: string
   objectWrapLevel?: number
   errorMessage?: string
   successMessage?: string
 }
 export function isPatchAction(obj: unknown): obj is PatchAction {
   return typeof obj === 'object' && obj !== null && 'url' in obj && obj['type'] === 'patch'
 }

 /**
  * Payload of `post` action.
  */
 export interface PostAction {
   readonly type: 'post'
   url: string
   objectWrapLevel?: number
   errorMessage?: string
   successMessage?: string
 }
 export function isPostAction(obj: unknown): obj is PostAction {
   return typeof obj === 'object' && obj !== null && 'url' in obj && obj['type'] === 'post'
 }

 /**
  * Payload for the action execution.
  */
 export type Action = DebugAction | PatchAction | PostAction

 /**
  * An action definition collection.
  */
 export interface Actions<ActionType = Action> {
   [key: string]: ActionType | ActionType[]
 }

 /**
  * A result retuned by the action handler.
  */
 export type ActionResult = SuccessfulActionResult | FailedActionResult

 /**
  * A successful result retuned by the action handler.
  */
 export interface SuccessfulActionResult {
   success: true
   result: unknown
 }

 /**
  * A failure result retuned by the action handler.
  */
 export interface FailedActionResult {
   success: false
   message: string
 }

 /**
  * A function processing an action.
  */
 export interface ActionHandler<SetupType = Setup, ElementType = InteractiveElement, ActionType = Action> {
   (action: ActionType, props: RenderingProps<SetupType, ElementType>): Promise<ActionResult>
 }

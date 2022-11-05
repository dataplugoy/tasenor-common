import { TextFileLine } from '..';
import { Setup } from './setup';
import { Action, Actions } from './actions';
import { TriggerHandler, TriggerValue } from './triggers';
/**
 * Generic interface for all elements that can define action handlers.
 */
export interface ActiveElement<SetupType = Setup, ElementType = InteractiveElement, ActionType = Action> {
    readonly type: string;
    triggerHandler?: TriggerHandler<SetupType, ElementType>;
    actions: Actions<ActionType>;
}
export declare function isActiveElement(object: unknown): object is ActiveElement;
/**
 * An element that has a name and a value.
 */
export interface NamedElement {
    readonly type: string;
    name: string;
    defaultValue?: TriggerValue;
    label?: string;
}
export declare function isNamedElement(object: unknown): object is NamedElement;
/**
 * A boolean toggle element.
 */
export interface BooleanElement<SetupType = Setup, ElementType = InteractiveElement, ActionType = Action> extends ActiveElement<SetupType, ElementType, ActionType>, NamedElement {
    readonly type: 'boolean';
}
export declare function isBooleanElement(object: unknown): object is BooleanElement;
/**
 * A boolean element using radio buttons for Yes and No.
 */
export interface YesNoElement<SetupType = Setup, ElementType = InteractiveElement, ActionType = Action> extends ActiveElement<SetupType, ElementType, ActionType>, NamedElement {
    readonly type: 'yesno';
}
export declare function isYesNoElement(object: unknown): object is YesNoElement;
/**
 * A text editing element.
 */
export interface NumberElement<SetupType = Setup, ElementType = InteractiveElement, ActionType = Action> extends ActiveElement<SetupType, ElementType, ActionType>, NamedElement {
    readonly type: 'number';
    unit?: string;
}
export declare function isNumberElement(object: unknown): object is NumberElement;
/**
 * A text editing element.
 */
export interface TextElement<SetupType = Setup, ElementType = InteractiveElement, ActionType = Action> extends ActiveElement<SetupType, ElementType, ActionType>, NamedElement {
    readonly type: 'text';
}
export declare function isTextElement(object: unknown): object is TextElement;
/**
 * An element activating an action when clicked.
 */
export interface ButtonElement<SetupType = Setup, ElementType = InteractiveElement, ActionType = Action> extends ActiveElement<SetupType, ElementType, ActionType> {
    readonly type: 'button';
    label: string;
    requires?: string | string[];
}
export declare function isButtonElement(object: unknown): object is ButtonElement;
/**
 * An elment that contains other elements.
 */
export interface ContainerElement<ElementType = InteractiveElement> {
    elements: ElementType[];
}
export declare function isContainerElement(object: unknown): object is ContainerElement;
/**
 * A structural element choosing what to show from the value of some other element.
 */
export interface CaseElement<ElementType = InteractiveElement> {
    readonly type: 'case';
    condition: string;
    cases: Record<string, ElementType>;
    defaultValue?: string;
}
export declare function isCaseElement(object: unknown): object is CaseElement;
/**
 * A simple element container rendering each contained element one by one as they are.
 */
export interface FlatElement<ElementType = InteractiveElement> extends ContainerElement<ElementType> {
    readonly type: 'flat';
}
export declare function isFlatElement(object: unknown): object is FlatElement;
/**
 * A container with visible frame around it.
 */
export interface BoxElement<ElementType = InteractiveElement> extends ContainerElement<ElementType> {
    readonly type: 'box';
    title?: string;
}
export declare function isBoxElement(object: unknown): object is BoxElement;
/**
 * Generic base class for an element displaying some data content.
 */
export interface ViewElement<DataType> {
    data: DataType;
}
/**
 * A HTML element displayed as is.
 */
export interface HtmlElement {
    readonly type: 'html';
    html: string;
}
export declare function isHtmlElement(object: unknown): object is HtmlElement;
/**
 * A text message displayed as is.
 */
export interface MessageElement {
    readonly type: 'message';
    severity: 'info' | 'warning' | 'error' | 'success';
    text: string;
}
export declare function isMessageElement(object: unknown): object is MessageElement;
/**
 * A display for an imported text file line.
 */
export interface TextFileLineElement {
    readonly type: 'textFileLine';
    line: TextFileLine;
}
export declare function isTextFileLineElement(object: unknown): object is TextFileLineElement;
/**
 * A collection of radio buttons.
 */
export interface RadioElement<SetupType = Setup, ElementType = InteractiveElement, ActionType = Action> extends ActiveElement<SetupType, ElementType, ActionType>, NamedElement {
    readonly type: 'radio';
    options: Record<string, string>;
}
export declare function isRadioElement(object: unknown): object is RadioElement;
export declare type InteractiveElement = BooleanElement | TextElement | HtmlElement | ButtonElement | FlatElement | BoxElement | MessageElement | TextFileLineElement | RadioElement | CaseElement | YesNoElement | NumberElement;

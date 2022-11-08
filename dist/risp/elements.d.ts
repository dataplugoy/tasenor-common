import { Actions } from './actions';
import { TriggerHandler } from './triggers';
import { TextFileLine } from '../import';
import { FilterRule } from '../language';
import { ProcessConfig } from '../process_types';
import { AccountNumber, TagType, Tag, TransactionImportOptions, Value } from '../types';
/**
 * Generic interface for all elements that can define action handlers.
 */
export interface ActiveElement {
    readonly type: string;
    triggerHandler?: TriggerHandler;
    actions: Actions;
}
export declare function isActiveElement(object: unknown): object is ActiveElement;
/**
 * An element that has a name and a value.
 */
export interface NamedElement {
    readonly type: string;
    name: string;
    defaultValue?: Value;
    label?: string;
}
export declare function isNamedElement(object: unknown): object is NamedElement;
/**
 * A boolean toggle element.
 */
export interface BooleanElement extends ActiveElement, NamedElement {
    readonly type: 'boolean';
}
export declare function isBooleanElement(object: unknown): object is BooleanElement;
/**
 * A boolean element using radio buttons for Yes and No.
 */
export interface YesNoElement extends ActiveElement, NamedElement {
    readonly type: 'yesno';
}
export declare function isYesNoElement(object: unknown): object is YesNoElement;
/**
 * A text editing element.
 */
export interface NumberElement extends ActiveElement, NamedElement {
    readonly type: 'number';
    unit?: string;
}
export declare function isNumberElement(object: unknown): object is NumberElement;
/**
 * A text editing element.
 */
export interface TextElement extends ActiveElement, NamedElement {
    readonly type: 'text';
}
export declare function isTextElement(object: unknown): object is TextElement;
/**
 * An element activating an action when clicked.
 */
export interface ButtonElement extends ActiveElement {
    readonly type: 'button';
    label: string;
    requires?: string | string[];
}
export declare function isButtonElement(object: unknown): object is ButtonElement;
/**
 * An elment that contains other elements.
 */
export interface ContainerElement {
    elements: TasenorElement[];
}
export declare function isContainerElement(object: unknown): object is ContainerElement;
/**
 * A structural element choosing what to show from the value of some other element.
 */
export interface CaseElement {
    readonly type: 'case';
    condition: string;
    cases: Record<string, TasenorElement>;
    defaultValue?: string;
}
export declare function isCaseElement(object: unknown): object is CaseElement;
/**
 * A simple element container rendering each contained element one by one as they are.
 */
export interface FlatElement extends ContainerElement {
    readonly type: 'flat';
}
export declare function isFlatElement(object: unknown): object is FlatElement;
/**
 * A container with visible frame around it.
 */
export interface BoxElement extends ContainerElement {
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
export interface RadioElement extends ActiveElement, NamedElement {
    readonly type: 'radio';
    options: Record<string, string>;
}
export declare function isRadioElement(object: unknown): object is RadioElement;
/**
 * An element that allows one to select one of the accounts from dropdown.
 */
export declare type AccountElement = ActiveElement & NamedElement & {
    readonly type: 'account';
    filter?: FilterRule;
    preferred?: AccountNumber[];
};
/**
 * An element that allows one to select one of the accounts from dropdown.
 */
export declare type TagsElement = ActiveElement & NamedElement & {
    readonly type: 'tags';
    label?: string;
    single?: boolean;
    types: TagType[];
} | ActiveElement & NamedElement & {
    readonly type: 'tags';
    label?: string;
    single?: boolean;
    options: Tag[];
    add?: Tag[];
} | ActiveElement & NamedElement & {
    readonly type: 'tags';
    label?: string;
    single?: boolean;
    all: true;
};
/**
 * An element that allows one to select a currency.
 */
export declare type CurrencyElement = ActiveElement & NamedElement & {
    readonly type: 'currency';
};
/**
 * Editor for import rules.
 */
export declare type RuleEditorElement = ActiveElement & NamedElement & {
    readonly type: 'ruleEditor';
    lines: TextFileLine[];
    cashAccount: AccountNumber | null;
    config: ProcessConfig;
    options: TransactionImportOptions;
};
/**
 * A type for all Tasenor and RISP elements used.
 */
export declare type TasenorElement = AccountElement | TagsElement | CurrencyElement | BooleanElement | BoxElement | ButtonElement | CaseElement | FlatElement | HtmlElement | MessageElement | RadioElement | TextElement | NumberElement | TextFileLineElement | YesNoElement | RuleEditorElement;

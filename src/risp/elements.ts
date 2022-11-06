import { Setup, TasenorSetup } from './setup'
import { Actions } from './actions'
import { TriggerHandler, TriggerValue } from './triggers'
import { TextFileLine } from '../import'
import { FilterRule } from '../language'
import { ProcessConfig } from '../process_types'
import { AccountNumber, TagType, Tag, TransactionImportOptions } from '../types'

/**
 * Generic interface for all elements that can define action handlers.
 */
 export interface ActiveElement<SetupType = Setup, ElementType = InteractiveElement> {
  readonly type: string
  triggerHandler?: TriggerHandler<SetupType, ElementType>
  actions: Actions
}

export function isActiveElement(object: unknown): object is ActiveElement {
  return typeof object === "object" && object !== null && !!object['actions']
}

/**
 * An element that has a name and a value.
 */
export interface NamedElement {
  readonly type: string
  name: string
  defaultValue?: TriggerValue
  label?: string
}

export function isNamedElement(object: unknown): object is NamedElement {
  return typeof object === "object" && object !== null && 'name' in object
}

/**
 * A boolean toggle element.
 */
export interface BooleanElement<SetupType = Setup, ElementType = InteractiveElement> extends ActiveElement<SetupType, ElementType>, NamedElement {
  readonly type: 'boolean'
}

export function isBooleanElement(object: unknown): object is BooleanElement {
  return isActiveElement(object) && object['type'] === 'boolean'
}

/**
 * A boolean element using radio buttons for Yes and No.
 */
export interface YesNoElement<SetupType = Setup, ElementType = InteractiveElement> extends ActiveElement<SetupType, ElementType>, NamedElement {
  readonly type: 'yesno'
}

export function isYesNoElement(object: unknown): object is YesNoElement {
  return isActiveElement(object) && object['type'] === 'yesno'
}

/**
 * A text editing element.
 */
export interface NumberElement<SetupType = Setup, ElementType = InteractiveElement> extends ActiveElement<SetupType, ElementType>, NamedElement {
  readonly type: 'number'
  unit?: string
}

export function isNumberElement(object: unknown): object is NumberElement {
  return isActiveElement(object) && object['type'] === 'number'
}

/**
 * A text editing element.
 */
 export interface TextElement<SetupType = Setup, ElementType = InteractiveElement> extends ActiveElement<SetupType, ElementType>, NamedElement {
  readonly type: 'text'
}

export function isTextElement(object: unknown): object is TextElement {
  return isActiveElement(object) && object['type'] === 'text'
}

/**
 * An element activating an action when clicked.
 */
export interface ButtonElement<SetupType = Setup, ElementType = InteractiveElement> extends ActiveElement<SetupType, ElementType> {
  readonly type: 'button'
  label: string
  requires?: string | string[]
}

export function isButtonElement(object: unknown): object is ButtonElement {
  return isActiveElement(object) && object['type'] === 'button'
}

/**
 * An elment that contains other elements.
 */
export interface ContainerElement<ElementType = InteractiveElement> {
  elements: ElementType[]
}

export function isContainerElement(object: unknown): object is ContainerElement {
  return typeof object === "object" && object !== null && !!object['elements']
}

/**
 * A structural element choosing what to show from the value of some other element.
 */
export interface CaseElement<ElementType = InteractiveElement> {
  readonly type: 'case'
  condition: string
  cases: Record<string, ElementType>
  defaultValue?: string
}
export function isCaseElement(object: unknown): object is CaseElement {
  return (typeof object === "object" && object !== null && object['condition'] && object['cases'] &&
    typeof object['cases'] === 'object' && object['cases'] !== null
  )
}

/**
 * A simple element container rendering each contained element one by one as they are.
 */
export interface FlatElement<ElementType = InteractiveElement> extends ContainerElement<ElementType> {
  readonly type: 'flat'
}

export function isFlatElement(object: unknown): object is FlatElement {
  return isContainerElement(object) && object['type'] === 'flat'
}

/**
 * A container with visible frame around it.
 */
export interface BoxElement<ElementType = InteractiveElement> extends ContainerElement<ElementType> {
  readonly type: 'box'
  title?: string
}

export function isBoxElement(object: unknown): object is BoxElement {
  return isContainerElement(object) && object['type'] === 'box'
}

/**
 * Generic base class for an element displaying some data content.
 */
export interface ViewElement<DataType> {
  data: DataType
}

/**
 * A HTML element displayed as is.
 */
export interface HtmlElement {
  readonly type: 'html'
  html: string
}

export function isHtmlElement(object: unknown): object is HtmlElement {
  return (typeof object === "object" && object !== null && object['type'] === 'html'
    && 'html' in object && typeof object['html'] === 'string'
  )
}

/**
 * A text message displayed as is.
 */
export interface MessageElement {
  readonly type: 'message'
  severity: 'info' | 'warning' | 'error' | 'success'
  text: string
}

export function isMessageElement(object: unknown): object is MessageElement {
  return (typeof object === "object" && object !== null && object['type'] === 'message'
    && 'severity' in object && ['info', 'warning', 'error', 'success'].includes(object['severity'])
    && 'text' in object && typeof object['text'] === 'string'
  )
}

/**
 * A display for an imported text file line.
 */
export interface TextFileLineElement {
  readonly type: 'textFileLine'
  line: TextFileLine
}

export function isTextFileLineElement(object: unknown): object is TextFileLineElement {
  return (typeof object === "object" && object !== null && object['type'] === 'textFileLine'
    && 'line' in object && typeof object['line'] === 'object' && object['line'] !== null
  )
}

/**
 * A collection of radio buttons.
 */
export interface RadioElement<SetupType = Setup, ElementType = InteractiveElement> extends ActiveElement<SetupType, ElementType>, NamedElement {
  readonly type: 'radio'
  options: Record<string, string>
}

export function isRadioElement(object: unknown): object is RadioElement {
  return (isActiveElement(object) && object['type'] === 'radio'
    && 'options' in object && typeof object['options'] === 'object'
  )
}

/**
 * An element that allows one to select one of the accounts from dropdown.
 */
 export type AccountElement = ActiveElement<TasenorSetup, AccountElement> & NamedElement & {
  readonly type: 'account'
  filter?: FilterRule
  preferred?: AccountNumber[]
}

/**
 * An element that allows one to select one of the accounts from dropdown.
 */
export type TagsElement = ActiveElement<TasenorSetup, TagsElement> & NamedElement & {
  readonly type: 'tags'
  label?: string
  single?: boolean
  types: TagType[]
} | ActiveElement<TasenorSetup, TagsElement> & NamedElement & {
  readonly type: 'tags'
  label?: string
  single?: boolean
  options: Tag[]
  add?: Tag[]
} | ActiveElement<TasenorSetup, TagsElement> & NamedElement & {
  readonly type: 'tags'
  label?: string
  single?: boolean
  all: true
}

/**
 * An element that allows one to select a currency.
 */
export type CurrencyElement = ActiveElement<TasenorSetup, CurrencyElement> & NamedElement & {
  readonly type: 'currency'
}

/**
 * Editor for import rules.
 */
export type RuleEditorElement = ActiveElement<TasenorSetup, RuleEditorElement> & NamedElement & {
  readonly type: 'ruleEditor'
  lines: TextFileLine[]
  cashAccount: AccountNumber | null
  config: ProcessConfig
  options: TransactionImportOptions
}

export type InteractiveElement = BooleanElement | TextElement | HtmlElement | ButtonElement | FlatElement | BoxElement | MessageElement | TextFileLineElement | RadioElement | CaseElement | YesNoElement | NumberElement

/**
 * A type for all Tasenor and RISP elements used.
 */
export type TasenorElement = AccountElement |
  TagsElement |
  CurrencyElement |
  BooleanElement<TasenorSetup, TasenorElement> |
  BoxElement<TasenorElement> |
  ButtonElement<TasenorSetup, TasenorElement> |
  CaseElement<TasenorElement> |
  FlatElement<TasenorElement> |
  HtmlElement |
  MessageElement |
  RadioElement<TasenorSetup, TasenorElement> |
  TextElement<TasenorSetup, TasenorElement> |
  NumberElement<TasenorSetup, TasenorElement> |
  TextFileLineElement |
  YesNoElement<TasenorSetup, TasenorElement> |
  RuleEditorElement

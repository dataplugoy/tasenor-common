import { Action, ActiveElement, BooleanElement, ButtonElement, FlatElement, BoxElement, MessageElement, NamedElement, RadioElement, Setup, TextElement, HtmlElement, TextFileLineElement, CaseElement, YesNoElement, NumberElement } from "interactive-elements"
import { Store, Tag, TagType } from "."
import { PluginCode } from ".."
import { FilterRule } from "../.."
import { AccountNumber } from "./accounts"

/**
 * A setup for RISP used in Tasenor project.
 */
export type TasenorSetup = Setup & {
  store: Store
}

/**
 * An action for storing a plugin or general settings.
 */
export interface SaveSettingsAction {
  readonly type: 'saveSettings'
  backend?: boolean
  plugin: PluginCode
}

/**
 * An action definition containing all Tasenor and RISP actions.
 */
export type TasenorAction = Action | SaveSettingsAction

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
}

/**
 * An element that allows one to select a currency.
 */
 export type CurrencyElement = ActiveElement<TasenorSetup, CurrencyElement> & NamedElement & {
  readonly type: 'currency'
}

/**
 * A type for all Tasenor and RISP elements used.
 */
export type TasenorElement = AccountElement |
  TagsElement |
  CurrencyElement |
  BooleanElement<TasenorSetup, TasenorElement, TasenorAction> |
  BoxElement<TasenorElement> |
  ButtonElement<TasenorSetup, TasenorElement, TasenorAction> |
  CaseElement<TasenorElement> |
  FlatElement<TasenorElement> |
  HtmlElement |
  MessageElement |
  RadioElement<TasenorSetup, TasenorElement, TasenorAction> |
  TextElement<TasenorSetup, TasenorElement, TasenorAction> |
  NumberElement<TasenorSetup, TasenorElement, TasenorAction> |
  TextFileLineElement |
  YesNoElement<TasenorSetup, TasenorElement, TasenorAction>

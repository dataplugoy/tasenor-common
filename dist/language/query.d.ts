/**
 * A query mapping on-screen questions to the values if selected.
 */
export type UIQueryAsk<Type = unknown> = {
    name?: string;
    label?: string;
    ask: Record<string, Type>;
};
/**
 * A query asking explicit line of text to be entered.
 */
export type UIQueryText = {
    name?: string;
    label?: string;
    text: true;
};
/**
 * A query for choosing a single tag from the listed tags.
 */
export type UIQueryTag<Type = unknown> = {
    name?: string;
    label?: string;
    chooseTag: Type[];
};
/**
 * A named reference to the other query with the same name.
 */
export type UIQueryRef = {
    name: string;
};
export declare function isUIQueryRef(obj: unknown): obj is UIQueryRef;
/**
 * A definition of a UI query for asking more information about transaction.
 */
export type UIQuery<Type = unknown> = UIQueryAsk<Type> | UIQueryTag<Type> | UIQueryText;
export type UIQueryOrRef<Type = unknown> = UIQuery<Type> | UIQueryRef;
export declare function isUIQuery(obj: unknown): obj is UIQuery;

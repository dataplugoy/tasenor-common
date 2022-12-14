import Opaque from "ts-opaque";
/**
 * An additional label that can be added to transaction entry.
 */
export type Tag = Opaque<string, 'Tag'>;
export declare function isTag(s: unknown): s is Tag;
/**
 * A labels collected to the string in the format "[Tag1][Tag2][Tag3]".
 */
export type TagString = Opaque<string, 'TagString'>;
export declare function isTagString(s: unknown): s is Tag;
/**
 * Classification of a tag.
 */
export type TagType = Opaque<string, 'TagType'>;
export declare function isTagType(s: unknown): s is TagType;

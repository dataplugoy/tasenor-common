import Opaque from "ts-opaque"

/**
 * An additional label that can be added to transaction entry.
 */
export type Tag = Opaque<string, 'Tag'>
export function isTag(s: unknown): s is Tag {
  return typeof s === 'string' && /^[A-Za-z0-9]+$/.test(s)
}

/**
 * A labels collected to the string in the format "[Tag1][Tag2][Tag3]".
 */
export type TagString = Opaque<string, 'TagString'>
export function isTagString(s: unknown): s is Tag {
  if (typeof s !== 'string' || !/^\[\]$/.test(s)) {
    return false
  }
  const tags = s.substr(1, s.length - 2).split('][')
  return tags.filter(tag => !isTag(tag)).length > 0
}

/**
 * Classification of a tag.
 */
export type TagType = Opaque<string, 'TagType'>
export function isTagType(s: unknown): s is TagType {
  return typeof s === 'string'
}

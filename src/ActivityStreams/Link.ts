import { ASObject } from './Object.js';

export interface ASBaseLink {
  href?: string;
  rel?: string;
  mediaType?: string;
  name?: string;
  hreflang?: string;
  height?: string;
  width?: string;
  preview?: ASLink | ASObject;
}

export type ASLink = ASGenericLink | ASMention;

export interface ASGenericLink extends ASBaseLink {
  type: 'Link';
}

export interface ASMention extends ASBaseLink {
  type: 'Mention';
}

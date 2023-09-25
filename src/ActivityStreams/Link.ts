import { ASObject } from './Object.js';

export class ASBaseLink {
  public href?: string;
  public rel?: string;
  public mediaType?: string;
  public name?: string;
  public hreflang?: string;
  public height?: string;
  public width?: string;
  public preview?: ASLink | ASObject;
}

export type ASLink = string | ASGenericLink | ASMention;

export class ASGenericLink extends ASBaseLink {
  public type = 'Link' as const;
}

export class ASMention extends ASBaseLink {
  public type = 'Mention' as const;
}

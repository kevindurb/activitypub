import { ASObject } from './Object.js';

export class ASLink {
  public type = 'Link' as const;

  public href?: string;
  public rel?: string;
  public mediaType?: string;
  public name?: string;
  public hreflang?: string;
  public height?: string;
  public width?: string;
  public preview?: ASLink | ASObject;
}

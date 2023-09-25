import { ASCollectionPage } from './CollectionPage.js';
import { ASLink } from './Link.js';
import { ASBaseObject, ASObject } from './Object.js';

export class ASCollection extends ASBaseObject {
  public type = 'Collection' as const;

  public totalItems?: number;
  public current?: ASCollectionPage | ASLink;
  public first?: ASCollectionPage | ASLink;
  public last?: ASCollectionPage | ASLink;
  public items?: Array<ASObject | ASLink>;
}

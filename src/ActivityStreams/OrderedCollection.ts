import { ASLink } from './Link.js';
import { ASBaseObject, ASObject } from './Object.js';
import { ASOrderedCollectionPage } from './OrderedCollectionPage.js';

export class ASOrderedCollection extends ASBaseObject {
  public type = 'OrderedCollection' as const;

  public totalItems?: number;
  public current?: ASOrderedCollectionPage | ASLink;
  public first?: ASOrderedCollectionPage | ASLink;
  public last?: ASOrderedCollectionPage | ASLink;
  public orderedItems?: Array<ASObject | ASLink>;
}

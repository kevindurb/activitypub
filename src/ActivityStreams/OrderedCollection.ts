import { ASLink } from './Link.js';
import { ASBaseObject, ASObject } from './Object.js';
import { ASOrderedCollectionPage } from './OrderedCollectionPage.js';

export interface ASOrderedCollection extends ASBaseObject {
  type: 'OrderedCollection';

  totalItems?: number;
  current?: ASOrderedCollectionPage | ASLink;
  first?: ASOrderedCollectionPage | ASLink;
  last?: ASOrderedCollectionPage | ASLink;
  orderedItems?: Array<ASObject | ASLink>;
}

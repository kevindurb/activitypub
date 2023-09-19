import { ASLink } from './Link.js';
import { ASBaseObject, ASObject } from './Object.js';
import { ASOrderedCollection } from './OrderedCollection.js';

export interface ASOrderedCollectionPage extends ASBaseObject {
  type: 'OrderedCollectionPage';

  partOf?: ASOrderedCollection | ASLink;
  next?: ASOrderedCollectionPage | ASLink;
  previous?: ASOrderedCollectionPage | ASLink;

  totalItems?: number;
  current?: ASOrderedCollectionPage | ASLink;
  first?: ASOrderedCollectionPage | ASLink;
  last?: ASOrderedCollectionPage | ASLink;
  items?: Array<ASObject | ASLink>;
}

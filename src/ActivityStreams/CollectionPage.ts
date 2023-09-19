import { ASCollection } from './Collection.js';
import { ASLink } from './Link.js';
import { ASBaseObject, ASObject } from './Object.js';

export interface ASCollectionPage extends ASBaseObject {
  type: 'CollectionPage';

  partOf?: ASCollection | ASLink;
  next?: ASCollectionPage | ASLink;
  previous?: ASCollectionPage | ASLink;

  totalItems?: number;
  current?: ASCollectionPage | ASLink;
  first?: ASCollectionPage | ASLink;
  last?: ASCollectionPage | ASLink;
  items?: Array<ASObject | ASLink>;
}

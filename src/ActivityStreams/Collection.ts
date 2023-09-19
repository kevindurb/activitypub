import { ASCollectionPage } from './CollectionPage.js';
import { ASLink } from './Link.js';
import { ASBaseObject, ASObject } from './Object.js';

export interface ASCollection extends ASBaseObject {
  type: 'Collection';

  totalItems?: number;
  current?: ASCollectionPage | ASLink;
  first?: ASCollectionPage | ASLink;
  last?: ASCollectionPage | ASLink;
  items?: Array<ASObject | ASLink>;
}

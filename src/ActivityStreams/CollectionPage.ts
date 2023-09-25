import { ASCollection } from './Collection.js';
import { ASLink } from './Link.js';
import { ASBaseObject, ASObject } from './Object.js';

export class ASCollectionPage extends ASBaseObject {
  public type = 'CollectionPage' as const;

  public partOf?: ASCollection | ASLink;
  public next?: ASCollectionPage | ASLink;
  public previous?: ASCollectionPage | ASLink;

  public totalItems?: number;
  public current?: ASCollectionPage | ASLink;
  public first?: ASCollectionPage | ASLink;
  public last?: ASCollectionPage | ASLink;
  public items?: Array<ASObject | ASLink>;
}

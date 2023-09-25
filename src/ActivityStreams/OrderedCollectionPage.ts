import { ASLink } from './Link.js';
import { ASBaseObject, ASObject } from './Object.js';
import { ASOrderedCollection } from './OrderedCollection.js';

export class ASOrderedCollectionPage extends ASBaseObject {
  public type = 'OrderedCollectionPage' as const;

  public partOf?: ASOrderedCollection | ASLink;
  public next?: ASOrderedCollectionPage | ASLink;
  public previous?: ASOrderedCollectionPage | ASLink;

  public totalItems?: number;
  public current?: ASOrderedCollectionPage | ASLink;
  public first?: ASOrderedCollectionPage | ASLink;
  public last?: ASOrderedCollectionPage | ASLink;
  public items?: Array<ASObject | ASLink>;
}

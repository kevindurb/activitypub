import { IsIn } from 'class-validator';
import { v4 } from 'uuid';

import { ASActivity } from './Activity.js';
import { ASActor } from './Actor.js';
import { ASCollection } from './Collection.js';
import { ASCollectionPage } from './CollectionPage.js';
import { ASIntransitiveActivity } from './IntransitiveActivity.js';
import { ASLink } from './Link.js';
import { ASObjectTypes, objectTypes } from './ObjectTypes.js';
import { ASOrderedCollection } from './OrderedCollection.js';
import { ASOrderedCollectionPage } from './OrderedCollectionPage.js';

export class AnyASObject {
  @IsIn(objectTypes)
  public type!: ASObjectTypes;
}

export class ASBaseObject {
  public id?: string = v4();
  @IsIn(objectTypes)
  public type!: ASObjectTypes;
  public attachment?: ASObject;
  public attributedTo?: ASObject | ASLink;
  public audience?: ASObject | ASLink;
  public content?: string;
  public context?: ASObject | ASLink;
  public name?: string;
  public endTime?: string;
  public generator?: ASObject | ASLink;
  public icon?: ASImage | ASLink;
  public image?: ASImage;
  public inReplyTo?: ASObject | ASLink;
  public location?: ASObject | ASLink;
  public preview?: ASObject | ASLink;
  public published?: string;
  public replies?: ASCollection | ASOrderedCollection;
  public startTime?: string;
  public summary?: string;
  public tag?: ASObject | ASLink;
  public updated?: string;
  public url?: string | ASLink;
  public to?: ASObject | ASLink;
  public bto?: ASObject | ASLink;
  public cc?: ASObject | ASLink;
  public bcc?: ASObject | ASLink;
  public mediaType?: string;
  public duration?: string;
}

export type ASObject =
  | ASGenericObject
  | ASActor
  | ASActivity
  | ASIntransitiveActivity
  | ASCollectionPage
  | ASCollection
  | ASOrderedCollection
  | ASOrderedCollectionPage
  | ASArticle
  | ASAudio
  | ASDocument
  | ASEvent
  | ASImage
  | ASNote
  | ASPage
  | ASPlace
  | ASProfile
  | ASRelationship
  | ASTombstone
  | ASVideo;

export class ASGenericObject extends ASBaseObject {
  public type = 'Object' as const;
}
export class ASArticle extends ASBaseObject {
  public type = 'Article' as const;
}
export class ASAudio extends ASBaseObject {
  public type = 'Audio' as const;
}
export class ASDocument extends ASBaseObject {
  public type = 'Document' as const;
}
export class ASEvent extends ASBaseObject {
  public type = 'Event' as const;
}
export class ASImage extends ASBaseObject {
  public type = 'Image' as const;
}
export class ASNote extends ASBaseObject {
  public type = 'Note' as const;
}
export class ASPage extends ASBaseObject {
  public type = 'Page' as const;
}
export class ASPlace extends ASBaseObject {
  public type = 'Place' as const;
  public accuracy?: number;
  public altitude?: number;
  public latitude?: number;
  public longitude?: number;
  public radius?: number;
  public units?: string;
}
export class ASProfile extends ASBaseObject {
  public type = 'Profile' as const;
  public describes?: ASObject;
}
export class ASRelationship extends ASBaseObject {
  public type = 'Relationship' as const;
  public subject?: ASObject;
  public object?: ASObject;
  public relationship?: string;
}
export class ASTombstone extends ASBaseObject {
  public type = 'Tombstone' as const;
  public formerType?: ASObjectTypes;
  public deleted?: string;
}
export class ASVideo extends ASBaseObject {
  public type = 'Video' as const;
}

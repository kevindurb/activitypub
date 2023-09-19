import { ASActivity } from './Activity.js';
import { ASActor } from './Actor.js';
import { ASCollection } from './Collection.js';
import { ASCollectionPage } from './CollectionPage.js';
import { ASIntransitiveActivity } from './IntransitiveActivity.js';
import { ASLink } from './Link.js';
import { ASOrderedCollection } from './OrderedCollection.js';
import { ASOrderedCollectionPage } from './OrderedCollectionPage.js';

export interface ASBaseObject {
  attachment: ASObject;
  attributedTo: ASObject;
  audience: ASObject;
  content: string;
  context: ASObject;
  name: string;
  endTime: string;
  generator: ASObject;
  icon: ASImage | ASLink;
  image: ASImage;
  inReplyTo: ASObject;
  location: ASObject;
  preview: ASObject;
  published: string;
  replies: ASCollection | ASOrderedCollection;
  startTime: string;
  summary: string;
  tag: ASObject;
  updated: string;
  url: string | ASLink;
  to: ASObject;
  bto: ASObject;
  cc: ASObject;
  bcc: ASObject;
  mediaType: string;
  duration: string;
}

export type ASObject =
  | ASGenericObject
  | ASActor
  | ASLink
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

export interface ASGenericObject extends ASBaseObject {
  type: 'Object';
}
export interface ASArticle extends ASBaseObject {
  type: 'Article';
}
export interface ASAudio extends ASBaseObject {
  type: 'Audio';
}
export interface ASDocument extends ASBaseObject {
  type: 'Document';
}
export interface ASEvent extends ASBaseObject {
  type: 'Event';
}
export interface ASImage extends ASBaseObject {
  type: 'Image';
}
export interface ASNote extends ASBaseObject {
  type: 'Note';
}
export interface ASPage extends ASBaseObject {
  type: 'Page';
}
export interface ASPlace extends ASBaseObject {
  type: 'Place';
  accuracy: number;
  altitude: number;
  latitude: number;
  longitude: number;
  radius: number;
  units: string;
}
export interface ASProfile extends ASBaseObject {
  type: 'Profile';
  describes: ASObject;
}
export interface ASRelationship extends ASBaseObject {
  type: 'Relationship';
  subject: ASObject;
  object: ASObject;
  relationship: string;
}
export interface ASTombstone extends ASBaseObject {
  type: 'Tombstone';
  formerType: string;
  deleted: string;
}
export interface ASVideo extends ASBaseObject {
  type: 'Video';
}

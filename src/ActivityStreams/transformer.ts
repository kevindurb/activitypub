import { plainToClassFromExist } from 'class-transformer';

import {
  ASAcceptActivity,
  ASAddActivity,
  ASAnnounceActivity,
  ASBlockActivity,
  ASCreateActivity,
  ASDeleteActivity,
  ASDislikeActivity,
  ASFlagActivity,
  ASFollowActivity,
  ASGenericActivity,
  ASIgnoreActivity,
  ASInviteActivity,
  ASJoinActivity,
  ASLeaveActivity,
  ASLikeActivity,
  ASListenActivity,
  ASMoveActivity,
  ASOfferActivity,
  ASReadActivity,
  ASRejectActivity,
  ASRemoveActivity,
  ASTentativeAcceptActivity,
  ASTentativeRejectActivity,
  ASUndoActivity,
  ASUpdateActivity,
  ASViewActivity,
} from './Activity.js';
import {
  ASActorApplication,
  ASActorGroup,
  ASActorOrganization,
  ASActorPerson,
  ASActorService,
} from './Actor.js';
import { ASCollection } from './Collection.js';
import { ASCollectionPage } from './CollectionPage.js';
import {
  ASArriveActivity,
  ASGenericIntransitiveActivity,
  ASOneOfQuestionActivity,
  ASTravelActivity,
} from './IntransitiveActivity.js';
import {
  ASArticle,
  ASAudio,
  ASDocument,
  ASEvent,
  ASGenericObject,
  ASImage,
  ASNote,
  ASPage,
  ASPlace,
  ASProfile,
  ASRelationship,
  ASTombstone,
  ASVideo,
} from './Object.js';
import { ASObjectTypes } from './ObjectTypes.js';
import { ASOrderedCollection } from './OrderedCollection.js';
import { ASOrderedCollectionPage } from './OrderedCollectionPage.js';

export const typeToClass = {
  Accept: ASAcceptActivity,
  Activity: ASGenericActivity,
  Add: ASAddActivity,
  Announce: ASAnnounceActivity,
  Application: ASActorApplication,
  Arrive: ASArriveActivity,
  Article: ASArticle,
  Audio: ASAudio,
  Block: ASBlockActivity,
  Collection: ASCollection,
  CollectionPage: ASCollectionPage,
  Create: ASCreateActivity,
  Delete: ASDeleteActivity,
  Dislike: ASDislikeActivity,
  Document: ASDocument,
  Event: ASEvent,
  Flag: ASFlagActivity,
  Follow: ASFollowActivity,
  Group: ASActorGroup,
  Ignore: ASIgnoreActivity,
  Image: ASImage,
  IntransitiveActivity: ASGenericIntransitiveActivity,
  Invite: ASInviteActivity,
  Join: ASJoinActivity,
  Leave: ASLeaveActivity,
  Like: ASLikeActivity,
  Listen: ASListenActivity,
  Move: ASMoveActivity,
  Note: ASNote,
  Object: ASGenericObject,
  Offer: ASOfferActivity,
  OrderedCollection: ASOrderedCollection,
  OrderedCollectionPage: ASOrderedCollectionPage,
  Organization: ASActorOrganization,
  Page: ASPage,
  Person: ASActorPerson,
  Place: ASPlace,
  Profile: ASProfile,
  Question: ASOneOfQuestionActivity, // TODO: fix question type
  Read: ASReadActivity,
  Reject: ASRejectActivity,
  Relationship: ASRelationship,
  Remove: ASRemoveActivity,
  Service: ASActorService,
  TentativeAccept: ASTentativeAcceptActivity,
  TentativeReject: ASTentativeRejectActivity,
  Tombstone: ASTombstone,
  Travel: ASTravelActivity,
  Undo: ASUndoActivity,
  Update: ASUpdateActivity,
  Video: ASVideo,
  View: ASViewActivity,
} as const;

export const transformToClass = <
  ObjectType extends ASObjectTypes,
  ClassType extends (typeof typeToClass)[ObjectType],
>(data: {
  type: ObjectType;
}): InstanceType<ClassType> => {
  const instance = new typeToClass[data.type]();
  return plainToClassFromExist(instance, data) as InstanceType<ClassType>;
};

import { ASActor } from './Actor.js';
import { ASLink } from './Link.js';
import { ASBaseObject, ASObject } from './Object.js';

export interface ASBaseActivity extends ASBaseObject {
  actor?: ASActor | ASLink;
  object?: ASObject;
  target?: ASObject | ASLink;
  result?: ASObject | ASLink;
  origin?: ASObject | ASLink;
  instrument?: ASObject | ASLink;
}

export type ASActivity =
  | ASGenericActivity
  | ASAcceptActivity
  | ASAddActivity
  | ASAnnounceActivity
  | ASBlockActivity
  | ASCreateActivity
  | ASDeleteActivity
  | ASDislikeActivity
  | ASFlagActivity
  | ASFollowActivity
  | ASIgnoreActivity
  | ASInviteActivity
  | ASJoinActivity
  | ASLeaveActivity
  | ASLikeActivity
  | ASListenActivity
  | ASMoveActivity
  | ASOfferActivity
  | ASRejectActivity
  | ASReadActivity
  | ASRemoveActivity
  | ASTentativeRejectActivity
  | ASTentativeAcceptActivity
  | ASUndoActivity
  | ASUpdateActivity
  | ASViewActivity;

export interface ASGenericActivity extends ASBaseActivity {
  type: 'Activity';
}
export interface ASAcceptActivity extends ASBaseActivity {
  type: 'Accept';
}
export interface ASAddActivity extends ASBaseActivity {
  type: 'Add';
}
export interface ASAnnounceActivity extends ASBaseActivity {
  type: 'Announce';
}
export interface ASBlockActivity extends ASBaseActivity {
  type: 'Block';
}
export interface ASCreateActivity extends ASBaseActivity {
  type: 'Create';
}
export interface ASDeleteActivity extends ASBaseActivity {
  type: 'Delete';
}
export interface ASDislikeActivity extends ASBaseActivity {
  type: 'Dislike';
}
export interface ASFlagActivity extends ASBaseActivity {
  type: 'Flag';
}
export interface ASFollowActivity extends ASBaseActivity {
  type: 'Follow';
}
export interface ASIgnoreActivity extends ASBaseActivity {
  type: 'Ignore';
}
export interface ASInviteActivity extends ASBaseActivity {
  type: 'Invite';
}
export interface ASJoinActivity extends ASBaseActivity {
  type: 'Join';
}
export interface ASLeaveActivity extends ASBaseActivity {
  type: 'Leave';
}
export interface ASLikeActivity extends ASBaseActivity {
  type: 'Like';
}
export interface ASListenActivity extends ASBaseActivity {
  type: 'Listen';
}
export interface ASMoveActivity extends ASBaseActivity {
  type: 'Move';
}
export interface ASOfferActivity extends ASBaseActivity {
  type: 'Offer';
}
export interface ASRejectActivity extends ASBaseActivity {
  type: 'Reject';
}
export interface ASReadActivity extends ASBaseActivity {
  type: 'Read';
}
export interface ASRemoveActivity extends ASBaseActivity {
  type: 'Remove';
}
export interface ASTentativeRejectActivity extends ASBaseActivity {
  type: 'TentativeReject';
}
export interface ASTentativeAcceptActivity extends ASBaseActivity {
  type: 'TentativeAccept';
}
export interface ASUndoActivity extends ASBaseActivity {
  type: 'Undo';
}
export interface ASUpdateActivity extends ASBaseActivity {
  type: 'Update';
}
export interface ASViewActivity extends ASBaseActivity {
  type: 'View';
}

import { ASActor } from './Actor.js';
import { ASLink } from './Link.js';
import { ASBaseObject, ASObject } from './Object.js';

export const activityTypes = [
  'Activity',
  'Accept',
  'Add',
  'Announce',
  'Block',
  'Create',
  'Delete',
  'Dislike',
  'Flag',
  'Follow',
  'Ignore',
  'Invite',
  'Join',
  'Leave',
  'Like',
  'Listen',
  'Move',
  'Offer',
  'Reject',
  'Read',
  'Remove',
  'TentativeReject',
  'TentativeAccept',
  'Undo',
  'Update',
  'View',
] as const;
export type ASActivityTypes = (typeof activityTypes)[number];

export class ASBaseActivity extends ASBaseObject {
  public declare type: ASActivityTypes;
  public constructor(
    public actor?: ASActor | ASLink,
    public object?: ASObject | ASLink,
    public target?: ASObject | ASLink,
    public result?: ASObject | ASLink,
    public origin?: ASObject | ASLink,
    public instrument?: ASObject | ASLink,
  ) {
    super();
  }
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

export class ASGenericActivity extends ASBaseActivity {
  public type = 'Activity' as const;
}
export class ASAcceptActivity extends ASBaseActivity {
  public type = 'Accept' as const;
}
export class ASAddActivity extends ASBaseActivity {
  public type = 'Add' as const;
}
export class ASAnnounceActivity extends ASBaseActivity {
  public type = 'Announce' as const;
}
export class ASBlockActivity extends ASBaseActivity {
  public type = 'Block' as const;
}
export class ASCreateActivity extends ASBaseActivity {
  public type = 'Create' as const;
}
export class ASDeleteActivity extends ASBaseActivity {
  public type = 'Delete' as const;
}
export class ASDislikeActivity extends ASBaseActivity {
  public type = 'Dislike' as const;
}
export class ASFlagActivity extends ASBaseActivity {
  public type = 'Flag' as const;
}
export class ASFollowActivity extends ASBaseActivity {
  public type = 'Follow' as const;
}
export class ASIgnoreActivity extends ASBaseActivity {
  public type = 'Ignore' as const;
}
export class ASInviteActivity extends ASBaseActivity {
  public type = 'Invite' as const;
}
export class ASJoinActivity extends ASBaseActivity {
  public type = 'Join' as const;
}
export class ASLeaveActivity extends ASBaseActivity {
  public type = 'Leave' as const;
}
export class ASLikeActivity extends ASBaseActivity {
  public type = 'Like' as const;
}
export class ASListenActivity extends ASBaseActivity {
  public type = 'Listen' as const;
}
export class ASMoveActivity extends ASBaseActivity {
  public type = 'Move' as const;
}
export class ASOfferActivity extends ASBaseActivity {
  public type = 'Offer' as const;
}
export class ASRejectActivity extends ASBaseActivity {
  public type = 'Reject' as const;
}
export class ASReadActivity extends ASBaseActivity {
  public type = 'Read' as const;
}
export class ASRemoveActivity extends ASBaseActivity {
  public type = 'Remove' as const;
}
export class ASTentativeRejectActivity extends ASBaseActivity {
  public type = 'TentativeReject' as const;
}
export class ASTentativeAcceptActivity extends ASBaseActivity {
  public type = 'TentativeAccept' as const;
}
export class ASUndoActivity extends ASBaseActivity {
  public type = 'Undo' as const;
}
export class ASUpdateActivity extends ASBaseActivity {
  public type = 'Update' as const;
}
export class ASViewActivity extends ASBaseActivity {
  public type = 'View' as const;
}

import { ASActor } from './Actor.js';
import { ASLink } from './Link.js';
import { ASBaseObject, ASGenericObject, ASObject } from './Object.js';

export class ASBaseIntransitiveActivity extends ASBaseObject {
  public actor?: ASActor | ASLink;
  public target?: ASObject | ASLink;
  public result?: ASObject | ASLink;
  public origin?: ASObject | ASLink;
  public instrument?: ASObject | ASLink;
}

export type ASIntransitiveActivity =
  | ASGenericIntransitiveActivity
  | ASArriveActivity
  | ASTravelActivity
  | ASQuestionActivity;

export class ASGenericIntransitiveActivity extends ASBaseIntransitiveActivity {
  public type = 'IntransitiveActivity' as const;
}
export class ASArriveActivity extends ASBaseIntransitiveActivity {
  public type = 'Arrive' as const;
}
export class ASTravelActivity extends ASBaseIntransitiveActivity {
  public type = 'Travel' as const;
}

export type ASQuestionActivity =
  | ASAnyOfQuestionActivity
  | ASOneOfQuestionActivity;

export class ASAnyOfQuestionActivity extends ASBaseIntransitiveActivity {
  public type = 'Question' as const;
  public closed?: ASGenericObject | ASLink | string | boolean;
  public anyOf?: Array<ASGenericObject>;
}
export class ASOneOfQuestionActivity extends ASBaseIntransitiveActivity {
  public type = 'Question' as const;
  public closed?: ASGenericObject | ASLink | string | boolean;
  public oneOf?: Array<ASGenericObject>;
}

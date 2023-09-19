import { ASActor } from './Actor.js';
import { ASLink } from './Link.js';
import { ASBaseObject, ASGenericObject, ASObject } from './Object.js';

export interface ASBaseIntransitiveActivity extends ASBaseObject {
  actor?: ASActor | ASLink;
  target?: ASObject | ASLink;
  result?: ASObject | ASLink;
  origin?: ASObject | ASLink;
  instrument?: ASObject | ASLink;
}

export type ASIntransitiveActivity =
  | ASGenericIntransitiveActivity
  | ASArriveActivity
  | ASTravelActivity
  | ASQuestionActivity;

export interface ASGenericIntransitiveActivity
  extends ASBaseIntransitiveActivity {
  type: 'IntransitiveActivity';
}
export interface ASArriveActivity extends ASBaseIntransitiveActivity {
  type: 'Arrive';
}
export interface ASTravelActivity extends ASBaseIntransitiveActivity {
  type: 'Travel';
}

export type ASQuestionActivity =
  | ASAnyOfQuestionActivity
  | ASOneOfQuestionActivity;

export interface ASAnyOfQuestionActivity extends ASBaseIntransitiveActivity {
  type: 'Question';
  closed?: ASGenericObject | ASLink | string | boolean;
  anyOf?: Array<ASGenericObject>;
}
export interface ASOneOfQuestionActivity extends ASBaseIntransitiveActivity {
  type: 'Question';
  closed?: ASGenericObject | ASLink | string | boolean;
  oneOf?: Array<ASGenericObject>;
}

import { ASActor } from './Actor.js';
import { BaseObject } from './BaseObject.js';
import { ASLink } from './Link.js';
import { ASObject } from './Object.js';

export class ASActivity extends BaseObject {
  public type = 'Activity' as const;

  public actor?: ASActor | ASLink;
  public object?: ASObject;
  public target?: ASObject | ASLink;
  public result?: ASObject | ASLink;
  public origin?: ASObject | ASLink;
  public instrument?: ASObject | ASLink;
}

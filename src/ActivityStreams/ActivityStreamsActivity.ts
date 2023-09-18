import { ActivityStreamsActor } from './ActivityStreamsActor.js';
import {
  ActivityStreamsObject,
  ActivityStreamsObjectType,
} from './ActivityStreamsObject.js';

export class ActivityStreamsActivity implements ActivityStreamsObject {
  public type = ActivityStreamsObjectType.Activity;
  public target?: ActivityStreamsObject;
  public result?: ActivityStreamsObject;
  public origin?: ActivityStreamsObject;
  public instrument?: ActivityStreamsObject;

  public constructor(
    public actor: ActivityStreamsActor,
    public object: ActivityStreamsObject,
  ) {}
}

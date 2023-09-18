import {
  ActivityStreamsObject,
  ActivityStreamsObjectType,
} from './ActivityStreamsObject.js';

export class ActivityStreamsActor implements ActivityStreamsObject {
  public type = ActivityStreamsObjectType.Person;
}

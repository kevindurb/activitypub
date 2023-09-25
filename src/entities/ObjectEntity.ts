import { Entity, Property } from '@mikro-orm/core';

import { activityTypes, ASActivity } from '../ActivityStreams/Activity.js';
import { ASActivityTypes } from '../ActivityStreams/Activity.js';
import { actorTypes, ASActor, ASActorTypes } from '../ActivityStreams/Actor.js';
import { ASObject } from '../ActivityStreams/Object.js';
import { BaseEntity } from './BaseEntity.js';

@Entity({ tableName: 'objects' })
export class ObjectEntity extends BaseEntity<ObjectEntity, 'id'> {
  @Property({ type: 'json' })
  private _properties: ASObject = { type: 'Object' };

  @Property({ persist: false })
  public get properties() {
    return this._properties;
  }

  public set properties(properties: ASObject) {
    this._properties = properties;
    if (properties.id) this.id = properties.id;
  }

  @Property({ persist: false })
  public get uri() {
    return `https://athing.com/${this.type}/${this.id}`;
  }

  @Property({ persist: false, name: 'properties.type' })
  public get type() {
    return this.properties.type;
  }

  public isActorType(): this is this & { properties: ASActor } {
    return actorTypes.includes(this.type as ASActorTypes);
  }

  public isActivityType(): this is this & { properties: ASActivity } {
    return activityTypes.includes(this.type as ASActivityTypes);
  }
}

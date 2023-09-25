import { Entity, Property } from '@mikro-orm/core';

import { ASObject } from '../ActivityStreams/Object.js';
import { BaseEntity } from './BaseEntity.js';

@Entity({ tableName: 'objects' })
export class ObjectEntity extends BaseEntity<ObjectEntity, 'id'> {
  @Property({ type: 'json' })
  public properties: Omit<ASObject, 'id'> = { type: 'Object' };

  @Property({ persist: false })
  public get uri() {
    return `https://athing.com/${this.properties.type}/${this.id}`;
  }
}

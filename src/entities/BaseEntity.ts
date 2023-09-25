import {
  BaseEntity as MikroOrmBaseEntity,
  Entity,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { v4 } from 'uuid';

@Entity({ abstract: true })
export abstract class BaseEntity<
  Entity extends object,
  Primary extends keyof Entity,
  Populate extends string = string,
> extends MikroOrmBaseEntity<Entity, Primary, Populate> {
  @PrimaryKey()
  public id: string = v4();

  @Property()
  public createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  public updatedAt: Date = new Date();
}

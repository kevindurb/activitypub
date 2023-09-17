import { BaseEntity, Entity, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class Test extends BaseEntity<Test, 'id'> {
  @PrimaryKey()
  public id!: number;
}

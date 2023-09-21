import { BaseEntity, Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'actors' })
export class ActorEntity extends BaseEntity<ActorEntity, '_username'> {
  @PrimaryKey()
  public _username!: string;

  @Property({ persist: false })
  public get id() {
    return `https://athing.com/${this._username}`;
  }

  public set username(username: string) {
    this._username = username;
  }
}

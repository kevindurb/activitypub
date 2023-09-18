import { BaseEntity, Entity, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class User extends BaseEntity<User, 'userId'> {
  @PrimaryKey()
  public userId!: string;

  public userDomain!: string;

  public getUserAliases() {
    return [`https://${process.env['DOMAIN']}/users/${this.userId}`];
  }

  public getUserLinks() {
    return [
      {
        rel: 'self',
        type: 'application/activity+json',
        href: `https://${process.env['DOMAIN']}/users/${this.userId}`,
      },
    ];
  }
}

import { EntityManager } from '@mikro-orm/postgresql';
import { isEmail } from 'class-validator';
import { inject, injectable } from 'inversify';
import {
  BadRequestError,
  Get,
  JsonController,
  QueryParam,
} from 'routing-controllers';

import { User } from '../entities/User.js';
import * as types from '../types.js';

@injectable()
@JsonController('/.well-known/webfinger')
export class WebFingerController {
  @inject(types.EntityManager) private em!: EntityManager;

  @Get()
  public async webfinger(@QueryParam('resource') resource: string) {
    const resourceUrl = new URL(resource);
    if (resourceUrl.protocol !== 'acct:')
      throw new BadRequestError('Protocol of resource must be "acct:"');

    if (!isEmail(resourceUrl.pathname))
      throw new BadRequestError('Account must be formatted as valid email');

    const [userId] = resourceUrl.pathname.split('@');
    const user = await this.em.findOne(User, { userId });

    if (!user) return;

    return {
      subject: `acct:${user.userId}`,
      aliases: user.getUserAliases(),
      links: user.getUserLinks(),
    };
  }
}

import { EntityManager } from '@mikro-orm/postgresql';
import { isEmail } from 'class-validator';
import { inject, injectable } from 'inversify';
import {
  BadRequestError,
  Get,
  JsonController,
  QueryParam,
} from 'routing-controllers';

import { ActorEntity } from '../entities/ActorEntity.js';
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

    const [username] = resourceUrl.pathname.split('@');
    const actor = await this.em.findOne(ActorEntity, { _username: username });

    if (!actor) return;

    return {
      subject: `acct:${actor.id}`,
      aliases: actor.id,
      links: actor.id,
    };
  }
}

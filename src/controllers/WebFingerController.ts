import { EntityManager } from '@mikro-orm/postgresql';
import { isEmail } from 'class-validator';
import { inject, injectable } from 'inversify';
import {
  BadRequestError,
  Get,
  JsonController,
  QueryParam,
} from 'routing-controllers';

import { ObjectEntity } from '../entities/ObjectEntity.js';
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

    const [id] = resourceUrl.pathname.split('@');
    const actor = await this.em.findOne(ObjectEntity, { id });

    if (!actor?.isActorType()) return;

    return {
      subject: `acct:${resourceUrl.pathname}`,
      aliases: [actor.uri],
      links: [actor.uri],
    };
  }
}

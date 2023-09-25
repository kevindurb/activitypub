import { EntityManager } from '@mikro-orm/postgresql';
import { inject, injectable } from 'inversify';
import {
  Body,
  Get,
  JsonController,
  NotFoundError,
  Param,
  Post,
  Redirect,
} from 'routing-controllers';

import { activityTypes } from '../ActivityStreams/Activity.js';
import { AnyASObject } from '../ActivityStreams/Object.js';
import { ASOrderedCollection } from '../ActivityStreams/OrderedCollection.js';
import { transformToClass } from '../ActivityStreams/transformer.js';
import { ObjectEntity } from '../entities/ObjectEntity.js';
import * as types from '../types.js';

/**
 * Actions from other actors to actor in params
 */
@injectable()
@JsonController('/:actorId/inbox')
export class InboxController {
  @inject(types.EntityManager) private em!: EntityManager;

  @Post()
  @Redirect(':redirect')
  public post(@Body() body: AnyASObject) {
    const instance = transformToClass(body);
    console.log(instance);
  }

  @Get()
  public async getInbox(
    @Param('actorId') actorId: string,
  ): Promise<ASOrderedCollection> {
    const actor = await this.em.findOne(ObjectEntity, { id: actorId });
    if (!actor?.isActorType()) throw new NotFoundError();

    const queryBuilder = this.em.createQueryBuilder(ObjectEntity);

    const activities = await queryBuilder
      .select('*')
      .where({
        properties: {
          to: actor.uri,
          type: activityTypes,
        },
      })
      .orderBy([{ column: 'createdAt', order: 'desc' }])
      .execute();

    return {
      type: 'OrderedCollection',
      orderedItems: activities.map((entity) => entity.toJSON().properties),
    };
  }
}

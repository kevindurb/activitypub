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

import {
  activityTypes,
  ASCreateActivity,
} from '../ActivityStreams/Activity.js';
import { AnyASObject } from '../ActivityStreams/Object.js';
import { ASOrderedCollection } from '../ActivityStreams/OrderedCollection.js';
import { transformToClass } from '../ActivityStreams/transformer.js';
import { ObjectEntity } from '../entities/ObjectEntity.js';
import * as types from '../types.js';

@injectable()
@JsonController('/:actorId/outbox')
export class OutboxController {
  @inject(types.EntityManager) private em!: EntityManager;

  @Post()
  @Redirect(':redirect')
  public async post(
    @Param('actorId') actorId: string,
    @Body() body: AnyASObject,
  ): Promise<{ redirect: string }> {
    const actor = await this.em.findOne(ObjectEntity, { id: actorId });
    if (!actor?.isActorType()) throw new NotFoundError();

    const instance = transformToClass(body);
    delete instance.id;
    const objectEntity = new ObjectEntity();
    objectEntity.properties = instance;

    if (objectEntity.isActivityType()) {
      objectEntity.properties.actor = actor.uri;
      await this.em.persistAndFlush(objectEntity);
      return {
        redirect: objectEntity.uri,
      };
    } else {
      const activityEntity = new ObjectEntity();
      activityEntity.properties = new ASCreateActivity(
        actor.uri,
        objectEntity.uri,
      );
      await this.em.persistAndFlush([objectEntity, activityEntity]);
      return {
        redirect: activityEntity.uri,
      };
    }
  }

  @Get()
  public async getOutbox(
    @Param('actorId') actorId: string,
  ): Promise<ASOrderedCollection> {
    const actor = await this.em.findOne(ObjectEntity, { id: actorId });
    if (!actor?.isActorType()) throw new NotFoundError();

    const queryBuilder = this.em.createQueryBuilder(ObjectEntity);

    const activities = await queryBuilder
      .select('*')
      .where({
        properties: {
          actor: actor.uri,
          type: activityTypes,
        },
      })
      .execute();

    return {
      type: 'OrderedCollection',
      orderedItems: activities.map((entity) => entity.toJSON().properties),
    };
  }
}

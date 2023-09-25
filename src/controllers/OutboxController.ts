import { EntityManager } from '@mikro-orm/postgresql';
import { inject, injectable } from 'inversify';
import { Body, Get, JsonController, Post, Redirect } from 'routing-controllers';

import { objectIsActivity } from '../ActivityStreams/Activity.js';
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
  public async post(@Body() body: AnyASObject) {
    const instance = transformToClass(body);
    if (!objectIsActivity(instance)) {
      // TODO: create activity as well
      const objectEntity = new ObjectEntity();
      objectEntity.properties = instance;
      await this.em.persistAndFlush(objectEntity);
      return {
        redirect: objectEntity.uri,
      };
    }
  }

  @Get()
  public async getOutbox(): Promise<ASOrderedCollection> {
    return {
      type: 'OrderedCollection',
      orderedItems: [],
    };
  }
}

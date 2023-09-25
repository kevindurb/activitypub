import { injectable } from 'inversify';
import { Body, Get, JsonController, Post } from 'routing-controllers';

import { AnyASObject } from '../ActivityStreams/Object.js';
import { ASOrderedCollection } from '../ActivityStreams/OrderedCollection.js';
import { transformToClass } from '../ActivityStreams/transformer.js';

/**
 * Actions from other actors to actor in params
 */
@injectable()
@JsonController('/:actorId/inbox')
export class InboxController {
  @Post()
  public post(@Body() body: AnyASObject) {
    const instance = transformToClass(body);
    console.log(instance);
  }

  @Get()
  public async getInbox(): Promise<ASOrderedCollection> {
    return {
      type: 'OrderedCollection',
      orderedItems: [],
    };
  }
}

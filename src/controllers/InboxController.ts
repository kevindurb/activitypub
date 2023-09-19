import { injectable } from 'inversify';
import { Body, Get, JsonController, Post } from 'routing-controllers';

import { ObjectValidator } from '../ActivityStreams/ObjectValidator.js';
import { ASOrderedCollection } from '../ActivityStreams/OrderedCollection.js';

/**
 * Actions from other actors to actor in params
 */
@injectable()
@JsonController('/:actorId/inbox')
export class InboxController {
  @Post()
  public post(@Body() body: ObjectValidator) {
    console.log(body);
  }

  @Get()
  public async getInbox(): Promise<ASOrderedCollection> {
    return {
      type: 'OrderedCollection',
      orderedItems: [],
    };
  }
}

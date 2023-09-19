import { injectable } from 'inversify';
import { Body, Get, JsonController, Post } from 'routing-controllers';

import { ObjectValidator } from '../ActivityStreams/ObjectValidator.js';
import { ASOrderedCollection } from '../ActivityStreams/OrderedCollection.js';

@injectable()
@JsonController('/:actorId/outbox')
export class OutboxController {
  @Post()
  public post(@Body() body: ObjectValidator) {
    console.log(body);
  }

  @Get()
  public async getOutbox(): Promise<ASOrderedCollection> {
    return {
      type: 'OrderedCollection',
      orderedItems: [],
    };
  }
}

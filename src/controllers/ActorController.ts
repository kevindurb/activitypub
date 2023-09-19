import { injectable } from 'inversify';
import { Get, JsonController } from 'routing-controllers';

import { ASActor } from '../ActivityStreams/Actor.js';

@injectable()
@JsonController('/:actorId')
export class ActorController {
  @Get()
  public async getActor(): Promise<ASActor> {
    return {
      type: 'Person',
    };
  }
}

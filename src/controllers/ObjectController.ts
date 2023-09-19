import { injectable } from 'inversify';
import { Get, JsonController } from 'routing-controllers';

import { ASObject } from '../ActivityStreams/Object.js';

@injectable()
@JsonController('/:actorId/:type/:objectId')
export class ObjectController {
  @Get()
  public async getObject(): Promise<ASObject> {
    return {
      type: 'Object',
    };
  }
}

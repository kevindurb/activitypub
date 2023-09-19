import { injectable } from 'inversify';
import { Get, JsonController } from 'routing-controllers';

import { ASCollection } from '../ActivityStreams/Collection.js';

@injectable()
@JsonController()
export class FollowersController {
  @Get('/:actorId/followers')
  public async getFollowers(): Promise<ASCollection> {
    return {
      type: 'Collection',
    };
  }

  @Get('/:actorId/following')
  public async getFollowing(): Promise<ASCollection> {
    return {
      type: 'Collection',
    };
  }
}

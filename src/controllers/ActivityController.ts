import { injectable } from 'inversify';
import { Get, JsonController } from 'routing-controllers';

import { ASActivity } from '../ActivityStreams/Activity.js';

@injectable()
@JsonController('/:actorId/:activityId')
export class ActivityController {
  @Get()
  public async getActivity(): Promise<ASActivity> {
    return {
      type: 'Activity',
    };
  }
}

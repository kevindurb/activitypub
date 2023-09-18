import { injectable } from 'inversify';
import { JsonController, Post } from 'routing-controllers';

@injectable()
@JsonController()
export class InboxController {
  @Post('/:userId/inbox')
  public post() {}
}

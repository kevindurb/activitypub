import { injectable } from 'inversify';
import { JsonController, Post } from 'routing-controllers';

@injectable()
@JsonController('/inbox')
export class InboxController {
  @Post('/')
  public post() {}
}

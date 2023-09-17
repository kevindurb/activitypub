import { RequestContext } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/postgresql';
import bodyParser from 'body-parser';
import express from 'express';
import { inject, injectable } from 'inversify';
import { useExpressServer } from 'routing-controllers';

import { InboxController } from './controllers/InboxController.js';
import * as types from './types.js';

@injectable()
export class Server {
  private express: express.Express;
  @inject(types.EntityManager) private em!: EntityManager;

  public constructor() {
    this.express = express();
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(bodyParser.json());
    this.express.use((req, res, next) => {
      RequestContext.create(this.em, next);
    });

    useExpressServer(this.express, {
      controllers: [InboxController],
    });
  }

  public async start() {
    const server = this.express.listen(process.env['PORT'], () => {
      const address = server.address();
      if (!address) return;
      if (typeof address === 'string') {
        console.log(`Listening at ${address}`);
      } else {
        console.log(`Listening at http://localhost:${address.port}`);
      }
    });
  }
}

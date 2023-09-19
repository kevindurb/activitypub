import { RequestContext } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/postgresql';
import bodyParser from 'body-parser';
import express from 'express';
import { inject, injectable } from 'inversify';
import morgan from 'morgan';
import { useExpressServer } from 'routing-controllers';

import { ActivityController } from './controllers/ActivityController.js';
import { ActorController } from './controllers/ActorController.js';
import { FollowersController } from './controllers/FollowersController.js';
import { InboxController } from './controllers/InboxController.js';
import { ObjectController } from './controllers/ObjectController.js';
import { OutboxController } from './controllers/OutboxController.js';
import { WebFingerController } from './controllers/WebFingerController.js';
import * as types from './types.js';

@injectable()
export class Server {
  private express: express.Express;
  @inject(types.EntityManager) private em!: EntityManager;

  public constructor() {
    this.express = express();
    this.express.use(morgan('combined'));
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(bodyParser.json());
    this.express.use((req, res, next) => {
      RequestContext.create(this.em, next);
    });

    useExpressServer(this.express, {
      controllers: [
        ActivityController,
        ActorController,
        FollowersController,
        InboxController,
        ObjectController,
        OutboxController,
        WebFingerController,
      ],
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

import 'reflect-metadata';
import 'dotenv/config';

import { MikroORM } from '@mikro-orm/core';
import type { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { useContainer } from 'routing-controllers';

import { InversifyAdapter } from './inversify.adapter.js';
import { container } from './inversify.config.js';
import ormConfig from './mikro-orm.config.js';
import { Server } from './Server.js';
import * as types from './types.js';

(async function bootstrap() {
  const orm = await MikroORM.init<PostgreSqlDriver>(ormConfig);

  const inversifyAdapter = new InversifyAdapter(container);
  useContainer(inversifyAdapter);

  container.bind(types.EntityManager).toConstantValue(orm.em);

  const server = container.get(Server);

  server.start();
})();

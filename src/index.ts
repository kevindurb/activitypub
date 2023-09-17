import 'reflect-metadata';

import { MikroORM } from '@mikro-orm/core';
import type { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { useContainer } from 'routing-controllers';

import { InversifyAdapter } from './inversify.adapter.js';
import { container } from './inversify.config.js';
import { Server } from './Server.js';
import * as types from './types.js';

(async function bootstrap() {
  const orm = await MikroORM.init<PostgreSqlDriver>({
    entities: ['./dist/entities'], // path to our JS entities (dist), relative to `baseDir`
    entitiesTs: ['./src/entities'], // path to our TS entities (src), relative to `baseDir`
    dbName: 'my-db-name',
    type: 'postgresql',
  });

  const inversifyAdapter = new InversifyAdapter(container);
  useContainer(inversifyAdapter);

  container.bind(types.EntityManager).toConstantValue(orm.em);

  const server = container.get(Server);

  server.start();
})();

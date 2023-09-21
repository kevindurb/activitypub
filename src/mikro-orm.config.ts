import { Options } from '@mikro-orm/postgresql';

import { entities } from './entities/entities.js';

export const config: Options = {
  entities,
  dbName: 'postgres',
  port: 55432,
  password: 'password',
  type: 'postgresql',
};

export default config;

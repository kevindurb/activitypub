import { Options } from '@mikro-orm/postgresql';

import { User } from './entities/User.js';

export const config: Options = {
  entities: [User],
  dbName: 'postgres',
  port: 55432,
  password: 'password',
  type: 'postgresql',
};

export default config;

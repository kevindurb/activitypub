import { Container } from 'inversify';

import { Server } from './Server.js';

const container = new Container();
container.bind(Server).toSelf();

export { container };

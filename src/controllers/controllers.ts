import { ActivityController } from './ActivityController.js';
import { ActorController } from './ActorController.js';
import { FollowersController } from './FollowersController.js';
import { InboxController } from './InboxController.js';
import { ObjectController } from './ObjectController.js';
import { OutboxController } from './OutboxController.js';
import { WebFingerController } from './WebFingerController.js';

export const controllers = [
  ActivityController,
  ActorController,
  FollowersController,
  InboxController,
  ObjectController,
  OutboxController,
  WebFingerController,
];

import { ASBaseObject } from './Object.js';

export type ASActor =
  | ASActorApplication
  | ASActorGroup
  | ASActorOrganization
  | ASActorPerson
  | ASActorService;

export interface ASActorApplication extends ASBaseObject {
  type: 'Application';
}

export interface ASActorGroup extends ASBaseObject {
  type: 'Group';
}

export interface ASActorOrganization extends ASBaseObject {
  type: 'Organization';
}

export interface ASActorPerson extends ASBaseObject {
  type: 'Person';
}

export interface ASActorService extends ASBaseObject {
  type: 'Service';
}

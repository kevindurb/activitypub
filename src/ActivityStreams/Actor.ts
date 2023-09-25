import { ASBaseObject } from './Object.js';

export const actorTypes = [
  'Application',
  'Group',
  'Organization',
  'Person',
  'Service',
] as const;
export type ASActorTypes = (typeof actorTypes)[number];

class ASBaseActor extends ASBaseObject {
  public declare type: ASActorTypes;
}

export type ASActor =
  | ASActorApplication
  | ASActorGroup
  | ASActorOrganization
  | ASActorPerson
  | ASActorService;

export class ASActorApplication extends ASBaseActor {
  public type = 'Application' as const;
}

export class ASActorGroup extends ASBaseActor {
  public type = 'Group' as const;
}

export class ASActorOrganization extends ASBaseActor {
  public type = 'Organization' as const;
}

export class ASActorPerson extends ASBaseActor {
  public type = 'Person' as const;
}

export class ASActorService extends ASBaseActor {
  public type = 'Service' as const;
}

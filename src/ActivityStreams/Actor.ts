import { BaseObject } from './BaseObject.js';

export type ASActor =
  | ASActorApplication
  | ASActorGroup
  | ASActorOrganization
  | ASActorPerson
  | ASActorService;

export class ASActorApplication extends BaseObject {
  public type = 'Application' as const;
}

export class ASActorGroup extends BaseObject {
  public type = 'Group' as const;
}

export class ASActorOrganization extends BaseObject {
  public type = 'Organization' as const;
}

export class ASActorPerson extends BaseObject {
  public type = 'Person' as const;
}

export class ASActorService extends BaseObject {
  public type = 'Service' as const;
}

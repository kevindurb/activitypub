import { ASBaseObject } from './Object.js';

export type ASActor =
  | ASActorApplication
  | ASActorGroup
  | ASActorOrganization
  | ASActorPerson
  | ASActorService;

export class ASActorApplication extends ASBaseObject {
  public type = 'Application' as const;
}

export class ASActorGroup extends ASBaseObject {
  public type = 'Group' as const;
}

export class ASActorOrganization extends ASBaseObject {
  public type = 'Organization' as const;
}

export class ASActorPerson extends ASBaseObject {
  public type = 'Person' as const;
}

export class ASActorService extends ASBaseObject {
  public type = 'Service' as const;
}

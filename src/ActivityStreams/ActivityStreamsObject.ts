export enum ActivityStreamsObjectType {
  Object = 'Object',
  Activity = 'Activity',
  Person = 'Person',
}

export interface ActivityStreamsObject {
  type: ActivityStreamsObjectType;
  attachment?: unknown;
  attributedTo?: unknown;
  audience?: unknown;
  content?: unknown;
  context?: unknown;
  name?: unknown;
  endTime?: unknown;
  generator?: unknown;
  icon?: unknown;
  image?: unknown;
  inReplyTo?: unknown;
  location?: unknown;
  preview?: unknown;
  published?: unknown;
  replies?: unknown;
  startTime?: unknown;
  summary?: unknown;
  tag?: unknown;
  updated?: unknown;
  url?: unknown;
  to?: unknown;
  bto?: unknown;
  cc?: unknown;
  bcc?: unknown;
  mediaType?: unknown;
  duration?: unknown;
}

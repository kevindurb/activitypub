export const objectTypes = [
  'Accept',
  'Activity',
  'Add',
  'Announce',
  'Application',
  'Arrive',
  'Article',
  'Audio',
  'Block',
  'Collection',
  'CollectionPage',
  'Create',
  'Delete',
  'Dislike',
  'Document',
  'Event',
  'Flag',
  'Follow',
  'Group',
  'Ignore',
  'Image',
  'IntransitiveActivity',
  'Invite',
  'Join',
  'Leave',
  'Like',
  'Listen',
  'Move',
  'Note',
  'Object',
  'Offer',
  'OrderedCollection',
  'OrderedCollectionPage',
  'Organization',
  'Page',
  'Person',
  'Place',
  'Profile',
  'Question',
  'Read',
  'Reject',
  'Relationship',
  'Remove',
  'Service',
  'TentativeAccept',
  'TentativeReject',
  'Tombstone',
  'Travel',
  'Undo',
  'Update',
  'Video',
  'View',
] as const;
export type ASObjectTypes = (typeof objectTypes)[number];
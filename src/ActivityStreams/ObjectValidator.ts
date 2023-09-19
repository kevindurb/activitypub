import { IsIn } from 'class-validator';

import { ASObjectTypes, objectTypes } from './ObjectTypes.js';

export class ObjectValidator {
  @IsIn(objectTypes)
  public type!: ASObjectTypes;
}

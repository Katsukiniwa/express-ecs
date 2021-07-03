import { shallowEqual } from "shallow-equal-object";

export abstract class ValueObject<T> {
  readonly [key: string]: any;

  constructor() {
    Object.freeze(this);
  }

  equals(vo: ValueObject<T>): boolean {
    if (vo === null || vo === undefined) {
      return false;
    }
    return shallowEqual(this, vo)
  }
}
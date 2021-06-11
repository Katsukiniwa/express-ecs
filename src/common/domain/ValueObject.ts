import { shallowEqual } from "shallow-equal-object";

export abstract class ValueObject<T> {
  // 何が渡ってくるか分からないので仕方なくanyを使っている
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
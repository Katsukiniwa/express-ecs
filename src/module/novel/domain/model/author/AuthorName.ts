import { ValueObject } from "../../../../../common/domain/ValueObject";

export class AuthorName extends ValueObject<AuthorName> {
  public readonly value: string;

  constructor(name: string) {
    super();

    if (name.length < 3 || name.length > 100) {
      throw new Error("名前の文字列が不正です");
    }

    this.value = name;
  }
}

import { ValueObject } from "../../../../../common/domain/ValueObject";

export class NovelTitle extends ValueObject<NovelTitle> {
  public readonly value: string;

  constructor(title: string) {
    super();

    if (title.length <= 0 || title.length >= 100) {
      throw new Error("長さが不正です");
    }

    this.value = title;
  }
}

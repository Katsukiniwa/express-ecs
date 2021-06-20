export class NovelTitle {
  public readonly title: string;

  constructor(title: string) {
    if (title.length <= 0 || title.length >= 100) {
      throw new Error("長さが不正です");
    }

    this.title = title;
  }
}
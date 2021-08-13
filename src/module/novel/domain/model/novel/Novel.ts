import { Entity } from "../../../../../common/domain/Entity";
import { Author } from "../author/Author";
import { Section } from "../section/Section";

/**
 * @name 小説
 * @description 小説はタイトル・章・あとがき・執筆者を含む
 */
export class Novel extends Entity<Novel> {
  public readonly id: string;
  private readonly _title: string;
  private readonly _sections: Section[];
  private readonly _author: Author;

  constructor(
    id: string,
    title: string,
    sections: Section[],
    author: Author
  ) {
    super();

    this.id = id;
    this._title = title;
    this._sections = sections;
    this._author = author;
  }

  get title(): string {
    return this._title;
  }

  get sections(): Section[] {
    return this._sections;
  }

  get author(): Author {
    return this._author;
  }
}

import { Entity } from "../../../common/domain/Entity";
import { Author } from "../author/Author";
import { Section } from "../section/Section";
import { NovelTitle } from "./NovelTitle";

/**
 * @name 小説
 * @description 小説はタイトル・章・あとがき・執筆者を含む
 */
export class Novel extends Entity {
  public readonly id: number | null;
  private readonly _title: string;
  private readonly _sections: Section[];
  private readonly _author: Author;

  constructor(id: number | null, title: string, sections: Section[], author: Author) {
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

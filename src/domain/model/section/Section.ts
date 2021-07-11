import { ValueObject } from "../../../common/domain/ValueObject";

/**
 * @name 章
 * @description タイトル・章ナンバー・本文を含む
 */
export class Section extends ValueObject<Section> {
  public readonly _title: string;
  public readonly _sectionNumber: number;
  public readonly _content: string;

  constructor(title: string, sectionNumber: number, content: string) {
    super();

    this._title = title;
    this._sectionNumber = sectionNumber;
    this._content = content;
  }
}

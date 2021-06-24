import { Entity } from "../../common/domain/Entity";
import { NovelTitle } from "./NovelTitle";

export class Novel extends Entity {
  public readonly id: number | null;
  private readonly _title: NovelTitle;

  constructor(id: number | null, title: string) {
    super();

    this.id = id;
    this._title = new NovelTitle(title);
  }

  get title(): string {
    return this._title.title;
  }
}
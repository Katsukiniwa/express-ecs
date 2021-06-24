import { Entity } from "../../common/domain/Entity";
import { AuthorName } from "./AuthorName";

export class Author extends Entity {
  public readonly id: number | null;
  private readonly _name: AuthorName;

  constructor(id: number | null, name: string) {
    super();

    this.id = id;
    this._name = name;
  }

  get name(): any {
    return this._name;
  }
}
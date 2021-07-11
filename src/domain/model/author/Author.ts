import { Entity } from "../../../common/domain/Entity";

/**
 * @name 著者
 * @description 著者は名前・アイコン・紹介文をもつ
 */
export class Author extends Entity {
  public readonly id: number | null;
  private readonly _name: string;
  private readonly _description: string;
  private readonly _icon: string;

  constructor(
    id: number | null,
    name: string,
    description: string,
    icon: string
  ) {
    super();

    this.id = id;
    this._name = name;
    this._description = description;
    this._icon = icon;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get icon(): string {
    return this._icon;
  }
}

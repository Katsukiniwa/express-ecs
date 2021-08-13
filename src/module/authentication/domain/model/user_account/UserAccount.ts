import { AggregateRoot } from "../../../../../common/domain/AggregateRoot";

export class UserAccount extends AggregateRoot<UserAccount> {
  constructor(
    public readonly id: string,
    private _email: string,
    private _icon: string,
  ) {
    super();
  }

  get email(): string {
    return this._email;
  }

  get icon(): string {
    return this._icon;
  }
}

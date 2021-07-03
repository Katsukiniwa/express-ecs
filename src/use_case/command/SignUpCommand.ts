import { Command } from "../../common/use_case/Command";

export class SignUpCommand extends Command {
  private readonly _userName: string;
  private readonly _emailAddress: string;
  private readonly _rawPassword: string;
  private readonly _rawPasswordConfirmation: string;

  constructor(
    userName: string,
    emailAddress: string,
    rawPassword: string,
    rawPasswordConfirmation: string
  ) {
    super();

    this._userName = userName;
    this._emailAddress = emailAddress;
    this._rawPassword = rawPassword;
    this._rawPasswordConfirmation = rawPasswordConfirmation;
  }

  get userName(): string {
    return this._userName;
  }

  get emailAddress(): string {
    return this._emailAddress;
  }

  get rawPassword(): string {
    return this._rawPassword;
  }

  get rawPasswordConfirmation(): string {
    return this._rawPasswordConfirmation;
  }
}
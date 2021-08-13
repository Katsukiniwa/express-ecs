import { TypedRequestBody } from "../../../../common/infrastructure/ExpressRequest";
import { SignUpCommand } from "../../use_case/command/SignUpCommand";

interface Params {
  userName: string;
  emailAddress: string;
  rawPassword: string;
  rawPasswordConfirmation: string;
}

export class SignUpRequestParams {
  private readonly _userName: string;
  private readonly _emailAddress: string;
  private readonly _rawPassword: string;
  private readonly _rawPasswordConfirmation: string;

  constructor(request: TypedRequestBody<Params>) {
    this._userName = request.body.userName;
    this._emailAddress = request.body.emailAddress;
    this._rawPassword = request.body.rawPassword;
    this._rawPasswordConfirmation = request.body.rawPasswordConfirmation;
  }

  public toCommand(): SignUpCommand {
    return new SignUpCommand(
      this.userName,
      this.emailAddress,
      this.rawPassword,
      this.rawPasswordConfirmation
    );
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

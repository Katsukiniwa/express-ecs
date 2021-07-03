import { request, Request } from "express";
import { RequestParams } from "../../common/presentation/RequestParams";
import { SignUpCommand } from "../../use_case/command/SignUpCommand";

export class SignUpRequestParams extends RequestParams {
  private readonly _userName: string;
  private readonly _emailAddress: string;
  private readonly _rawPassword: string;
  private readonly _rawPasswordConfirmation: string;

  constructor(request: Request) {
    super(request);

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
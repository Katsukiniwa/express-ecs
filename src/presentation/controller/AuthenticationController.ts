import { Request, Response } from "express";
import { BaseController } from "../../common/presentation/BaseController";
import { SignUpRequestParams } from "../request/SignUpRequestParams";

export class AuthenticationController extends BaseController {
  constructor (request: Request, response: Response) {
    super(request, response);
  }

  public signUp() {
    const requestParams = new SignUpRequestParams(this.request);
  }
}
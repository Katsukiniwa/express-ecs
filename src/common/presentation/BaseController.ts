import { Request, Response } from "express";

export abstract class BaseController {
  protected request: Request;
  protected response: Response;

  constructor(request: Request, response: Response) {
    this.request = request;
    this.response = response;
  }

  public static jsonResponse(
    res: Response,
    code: number,
    message: string
  ): Response {
    return res.status(code).json({ message });
  }

  public success<T>(res: Response, dto?: T): Response {
    const arg = !!dto
    if (arg) {
      return res.status(200).json(dto);
    } else {
      return res.sendStatus(200);
    }
  }

  public fail(error: Error | string): Response {
    console.error(error);
    return this.response.status(500).json({ message: error.toString() });
  }

  public clientError(message?: string): Response {
    return BaseController.jsonResponse(
      this.response,
      400,
      message ? message : "Unauthorized"
    );
  }

  public notFound(message?: string): Response {
    return BaseController.jsonResponse(
      this.response,
      404,
      message ? message : "Not found"
    );
  }
}

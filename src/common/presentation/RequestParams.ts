import { Request } from "express";

export abstract class RequestParams {
  [key: string]: any;
  
  constructor(_request: Request) {}
}
import { Request, Response } from "express";

export interface IController {
  execute(request: Request, response: Response): Promise<Response>;
}

import { Response } from "express";
import { Request } from "express-serve-static-core";
import { IController } from "../../../../core/presenter/IController";

export class CreateProductController implements IController {
   async execute(request: Request, response: Response): Promise<Response>{
    return response.json('Hello Word')
   }
}
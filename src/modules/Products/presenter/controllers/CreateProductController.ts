import { Response } from "express";
import { Request } from "express-serve-static-core";
import { IController } from "../../../../core/presenter/IController";
import { container } from "tsyringe";
import { ICreateProductUseCase } from "../../domain/useCases/CreateProductUseCase/ICreateProductUseCase";

export class CreateProductController implements IController {
   async execute(request: Request, response: Response): Promise<Response>{
      const createProductUseCase = container.resolve<ICreateProductUseCase>(
         "CreateProductUseCase"
      );

      const {
         name, 
         imageUrl
      } = request.body;

      await createProductUseCase.execute({
         name,
         imageUrl
      });

      return response.status(201).json();
   }
}
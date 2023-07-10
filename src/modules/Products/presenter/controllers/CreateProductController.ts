import { Response } from "express";
import { Request } from "express-serve-static-core";
import { IController } from "../../../../core/presenter/IController";
import { container } from "tsyringe";
import { ICreateProductUseCase } from "../../domain/useCases/CreateProductUseCase/ICreateProductUseCase";
import { AppError } from "../../../../core/errors/AppError";

export class CreateProductController implements IController {
   async execute(request: Request, response: Response): Promise<Response>{
      const createProductUseCase = container.resolve<ICreateProductUseCase>(
         "CreateProductUseCase"
      );

      const {
         name, 
         imageUrl, 
         price
      } = request.body;

      if(name == "" || name == null) {
           
         throw new AppError("Null or empty name", 400);
     }

      await createProductUseCase.execute({
         name,
         imageUrl,
         price
      });

      return response.status(201).json();
   }
}
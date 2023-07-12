import { Request, Response } from "express";

import { IController } from "../../../../core/presenter/IController";
import { container } from "tsyringe";
import {  IFindAllProductsUseCase } from "../../domain/useCases/FindAllProductsUseCase/IFindAllProductsUseCase";

export class FindAllProductsController implements IController {
  async  execute(request: Request, response: Response): Promise<Response> {
        const findAllProductsUseCase = container.resolve<IFindAllProductsUseCase>(
            "FindAllProductsUseCase"
        )

        const products = await findAllProductsUseCase.execute({})

        return response.status(200).json(products)
    }
}
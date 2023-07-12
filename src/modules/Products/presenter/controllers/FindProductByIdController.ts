import { Request, Response, json } from "express";
import { IController } from "../../../../core/presenter/IController";
import { container } from "tsyringe";
import { IFindProductByIdUseCase } from "../../domain/useCases/FindProuctByIdUseCase/IFindProductByIdUseCase";

export class FindProductByIdController implements IController {
   async execute(request: Request, response: Response): Promise<Response> {
        const findProductByIdUseCase = container.resolve<IFindProductByIdUseCase>(
            "FindProductUseCase"
        )
        const {id} = request.params
        
        const product = await findProductByIdUseCase.execute(id)

        const productFormated = {
            id: product.id,
            name: product.props.name,
            imageUrl: product.props.imageUrl,
            price: product.props.price
        }

        return response.status(200).json(productFormated)
    }
}
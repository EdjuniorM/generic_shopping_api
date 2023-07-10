import { Request, Response } from "express";
import { container } from "tsyringe";
import { IController } from "../../../../core/presenter/IController";
import { IUpdateProductUseCase } from "../../domain/useCases/UpdateProductUseCase/UpdateProductUseCase";


export class UpdateProductController implements IController {
    async execute(request: Request, response: Response): Promise<Response> {
        const updateProductUseCase = container.resolve<IUpdateProductUseCase>(
            "UpdateProductUseCase"
            );

        const {id} = request.params;

        const {
            name,
            imageUrl,
            price,
        } = request.body;


        await updateProductUseCase.execute({
            id,
            name,
            imageUrl,
            price,
        })
        
        return response.status(200).json("Produto atualizado com sucesso");
    }
}
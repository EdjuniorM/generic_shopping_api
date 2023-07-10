import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../repositories/IProductRepository";
import { UpdateProductUseCaseParams } from "./UpdateProductUseCase";

@injectable()
export class UpdateProductUseCase {
    constructor(
        @inject("ProductRepository")
        private readonly repository: IProductRepository
    ) {}

    async execute(params: UpdateProductUseCaseParams): Promise<void> {
        await this.repository.update(params);
    }
}
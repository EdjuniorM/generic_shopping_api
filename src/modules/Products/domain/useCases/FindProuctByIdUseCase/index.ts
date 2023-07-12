import { inject, injectable } from "tsyringe";
import { IFindProductByIdUseCase } from "./IFindProductByIdUseCase";
import { Product } from "../../entities/Product";
import { IProductRepository } from "../../repositories/IProductRepository";

@injectable()
export class FindProductUseCase implements IFindProductByIdUseCase {
    constructor(
        @inject("ProductRepository")
        private readonly repositoy: IProductRepository
    ) {}

    async execute(id: string): Promise<Product | null> {
        return await this.repositoy.findById(id);
    }
}
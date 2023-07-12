import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../repositories/IProductRepository";
import { IFindAllProductsUseCase } from "./IFindAllProductsUseCase";
import { NoParams } from "../../../../../core/domain/IUseCase";
import { Product } from "../../entities/Product";

@injectable()
export class FindAllProductsUseCase implements IFindAllProductsUseCase {
    constructor(
        @inject("ProductRepository")
        private readonly repository: IProductRepository
    ) {}
    async execute(_: NoParams): Promise<Product[]> {
        const products = await this.repository.findAll(_);
        return products
    }
}
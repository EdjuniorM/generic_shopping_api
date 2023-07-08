import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../domain/repositories/IProductRepository";
import { CreateProductUseCaseParams } from "../../domain/useCases/CreateProductUseCase/ICreateProductUseCase";
import { Product } from "../../domain/entities/Product";
import { AppError } from "../../../../core/errors/AppError";
import { IProductDataSource } from "../datasources/IProductDataSource";

@injectable()
export class ProductRepository implements IProductRepository {
    constructor(
        @inject("ProductDataSource")
        private dataSource: IProductDataSource
    ) {}

    async create(data: CreateProductUseCaseParams): Promise<void> {
        try {

            const product = new Product({ ...data });
            await this.dataSource.create(product)

        } catch(e) {
            throw new AppError(e.message, 400);
        }
    }
}
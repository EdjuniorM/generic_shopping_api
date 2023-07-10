import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../domain/repositories/IProductRepository";
import { CreateProductUseCaseParams } from "../../domain/useCases/CreateProductUseCase/ICreateProductUseCase";
import { Product } from "../../domain/entities/Product";
import { AppError } from "../../../../core/errors/AppError";
import { IProductDataSource } from "../datasources/IProductDataSource";
import { UpdateProductUseCaseParams } from "../../domain/useCases/UpdateProductUseCase/UpdateProductUseCase";

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

    async update(data: UpdateProductUseCaseParams): Promise<void> {
        try {
            const product = new Product(
             { 
                name: data.name,
                imageUrl: data.imageUrl,
                price: data.price
             },
             data.id
             );
            await  this.dataSource.update(product)

        } catch(e) {
            throw new AppError(e.message, 400);
        }
    }
}
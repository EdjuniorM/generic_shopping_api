import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../domain/repositories/IProductRepository";
import { CreateProductUseCaseParams } from "../../domain/useCases/CreateProductUseCase/ICreateProductUseCase";
import { Product } from "../../domain/entities/Product";
import { AppError } from "../../../../core/errors/AppError";
import { IProductDataSource } from "../datasources/IProductDataSource";
import { UpdateProductUseCaseParams } from "../../domain/useCases/UpdateProductUseCase/UpdateProductUseCase";
import { NoParams } from "../../../../core/domain/IUseCase";

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
            const oldProduct = await this.dataSource.findById(data.id)
            const product = new Product(
             { 
                name: !!data.name ? data.name : oldProduct.props.name,
                imageUrl: !!data.imageUrl ? data.imageUrl : oldProduct.props.imageUrl,
                price: !!data.price ? data.price : oldProduct.props.price
             },
             data.id
             );
            await  this.dataSource.update(product)

        } catch(e) {
            throw new AppError(e.message, 400);
        }
    }

    async findById(id: string): Promise<Product> {
        const product = await this.dataSource.findById(id);

        return product || null
    }

    async findAll(_: NoParams): Promise<Product[]> {
        const product = await this.dataSource.findAll();

        return product || null
    }
  
}
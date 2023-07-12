import { NoParams } from "../../../../core/domain/IUseCase";
import { Product } from "../entities/Product";
import { CreateProductUseCaseParams } from "../useCases/CreateProductUseCase/ICreateProductUseCase";
import { IFindProductByIdUseCase } from "../useCases/FindProuctByIdUseCase/IFindProductByIdUseCase";
import { UpdateProductUseCaseParams } from "../useCases/UpdateProductUseCase/UpdateProductUseCase";

export interface IProductRepository {
    create(data: CreateProductUseCaseParams): Promise<void>;
    findAll(_: NoParams) : Promise<Product[]>
    findById(id: string): Promise<Product | null>
    update(data: UpdateProductUseCaseParams): Promise<void>;
}
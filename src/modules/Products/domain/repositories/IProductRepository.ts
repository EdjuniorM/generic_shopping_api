import { CreateProductUseCaseParams } from "../useCases/CreateProductUseCase/ICreateProductUseCase";
import { UpdateProductUseCaseParams } from "../useCases/UpdateProductUseCase/UpdateProductUseCase";

export interface IProductRepository {
    create(data: CreateProductUseCaseParams): Promise<void>;
    update(data: UpdateProductUseCaseParams): Promise<void>;
}
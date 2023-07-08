import { CreateProductUseCaseParams } from "../useCases/CreateProductUseCase/ICreateProductUseCase";

export interface IProductRepository {
    create(data: CreateProductUseCaseParams): Promise<void>;
}
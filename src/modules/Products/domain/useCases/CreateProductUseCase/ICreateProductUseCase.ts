import { IUseCase } from "../../../../../core/domain/IUseCase"; 

export type CreateProductUseCaseParams = {
    name: string;
    imageUrl: string;
    price: number;
}

export interface ICreateProductUseCase 
    extends IUseCase<CreateProductUseCaseParams, void> {}
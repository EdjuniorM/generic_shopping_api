import { IUseCase } from "../../../../../core/domain/IUseCase"; 

export type CreateProductUseCaseParams = {
    name: string;
    imageUrl: string;
}

export interface ICreateProductUseCase 
    extends IUseCase<CreateProductUseCaseParams, void> {}
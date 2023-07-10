import { IUseCase } from "../../../../../core/domain/IUseCase";

export type UpdateProductUseCaseParams = {
    id: string;
    name?: string;
    imageUrl?: string;
    price?: number;
}

export interface IUpdateProductUseCase
  extends IUseCase<UpdateProductUseCaseParams, void> {}
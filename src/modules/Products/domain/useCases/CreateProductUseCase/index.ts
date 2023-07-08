import { inject, injectable } from "tsyringe";
import { CreateProductUseCaseParams, ICreateProductUseCase } from "./ICreateProductUseCase";
import { IProductRepository } from "../../repositories/IProductRepository";

@injectable()
export class CreateProductUseCase implements ICreateProductUseCase {
  constructor(
    @inject("ProductRepository")
    private repository: IProductRepository,
  ) {}

  async execute(params: CreateProductUseCaseParams): Promise<void> {
    await this.repository.create({ ...params });
  }
}

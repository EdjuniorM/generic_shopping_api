import { inject, injectable } from "tsyringe";
import { CreateProductUseCaseParams, ICreateProductUseCase } from "./ICreateProductUseCase";
import { IProductRepository } from "../../repositories/IProductRepository";
import { ICreateProductValidator } from "./CreateProductUseCase";

@injectable()
export class CreateProductUseCase implements ICreateProductUseCase {
  constructor(
    @inject("ProductRepository")
    private repository: IProductRepository,
    @inject("CreateProductValidator")
    private validator: ICreateProductValidator
  ) {}

  async execute(params: CreateProductUseCaseParams): Promise<void> {
    this.validator.validate(params)
    await this.repository.create({ ...params });
  }
}

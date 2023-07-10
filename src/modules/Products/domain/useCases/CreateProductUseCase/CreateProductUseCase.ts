import { injectable } from "tsyringe";
import { IValidator } from "../../../../../core/domain/Ivalidator";
import { CreateProductUseCaseParams } from "./ICreateProductUseCase";
import { AppError } from "../../../../../core/errors/AppError";

export interface ICreateProductValidator extends IValidator<CreateProductUseCaseParams> {}

@injectable()
export class CreateProductValidator implements ICreateProductValidator {
    validate(params: CreateProductUseCaseParams): void {
        if(params.name == "" || params.name == null) {
           
            throw new AppError("Null or empty name", 400);
        }
    }
}
import { IUseCase } from "../../../../../core/domain/IUseCase";
import { Product } from "../../entities/Product";

export interface IFindProductByIdUseCase 
    extends IUseCase<string, Product | null> {}
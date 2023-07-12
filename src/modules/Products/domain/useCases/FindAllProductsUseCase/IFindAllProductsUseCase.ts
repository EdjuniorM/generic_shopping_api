import { IUseCase, NoParams } from "../../../../../core/domain/IUseCase";
import { Product } from "../../entities/Product";

export interface IFindAllProductsUseCase extends IUseCase<NoParams, Product[]> {}
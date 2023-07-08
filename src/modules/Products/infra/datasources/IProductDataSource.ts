import { Product } from "../../domain/entities/Product";

export interface IProductDataSource {
    create(data: Product): Promise<void>;
}
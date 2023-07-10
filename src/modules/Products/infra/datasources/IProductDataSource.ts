import { Product } from "../../domain/entities/Product";

export interface IProductDataSource {
    create(data: Product): Promise<void>;
    update(data: Product): Promise<void>;
}
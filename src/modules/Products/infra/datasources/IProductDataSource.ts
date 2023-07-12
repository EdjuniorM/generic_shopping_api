import { Product } from "../../domain/entities/Product";

export interface IProductDataSource {
    create(data: Product): Promise<void>;
    findAll(): Promise<Product[]>
    findById(id: string): Promise<Product | null>
    update(data: Product): Promise<void>;
}
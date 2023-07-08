import { container } from "tsyringe";
import { ICreateProductUseCase } from "./domain/useCases/CreateProductUseCase/ICreateProductUseCase";
import { ProductRepository } from "./infra/repositories/ProductRepository";
import { IProductDataSource } from "./infra/datasources/IProductDataSource";
import { PrismaProductDataSource } from "./external/datasources/PrismaProductDataSource";
import { IProductRepository } from "./domain/repositories/IProductRepository";
import { CreateProductUseCase } from "./domain/useCases/CreateProductUseCase";

//useCases
container.registerSingleton<ICreateProductUseCase>(
    "CreateProductUseCase",
     CreateProductUseCase
)


//repositories
container.registerSingleton<IProductRepository>(
    "ProductRepository",
    ProductRepository
)


//datasource
container.registerType<IProductDataSource>(
    "ProductDataSource",
    PrismaProductDataSource
)


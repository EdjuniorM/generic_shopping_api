import { container } from "tsyringe";
import { ICreateProductUseCase } from "./domain/useCases/CreateProductUseCase/ICreateProductUseCase";
import { ProductRepository } from "./infra/repositories/ProductRepository";
import { IProductDataSource } from "./infra/datasources/IProductDataSource";
import { PrismaProductDataSource } from "./external/datasources/PrismaProductDataSource";
import { IProductRepository } from "./domain/repositories/IProductRepository";
import { CreateProductUseCase } from "./domain/useCases/CreateProductUseCase";
import { CreateProductValidator, ICreateProductValidator } from "./domain/useCases/CreateProductUseCase/CreateProductUseCase";
import { IUpdateProductUseCase } from "./domain/useCases/UpdateProductUseCase/UpdateProductUseCase";
import { UpdateProductUseCase } from "./domain/useCases/UpdateProductUseCase";
import { IFindProductByIdUseCase } from "./domain/useCases/FindProuctByIdUseCase/IFindProductByIdUseCase";
import { FindProductUseCase } from "./domain/useCases/FindProuctByIdUseCase";
import { IFindAllProductsUseCase } from "./domain/useCases/FindAllProductsUseCase/IFindAllProductsUseCase";
import { FindAllProductsUseCase } from "./domain/useCases/FindAllProductsUseCase";


//validator
container.registerSingleton<ICreateProductValidator>(
    "CreateProductValidator",
    CreateProductValidator
)

//useCases
container.registerSingleton<ICreateProductUseCase>(
    "CreateProductUseCase",
     CreateProductUseCase
)

container.registerSingleton<IUpdateProductUseCase>(
    "UpdateProductUseCase",
    UpdateProductUseCase
)

container.registerSingleton<IFindProductByIdUseCase>(
    "FindProductUseCase",
    FindProductUseCase
)

container.registerSingleton<IFindAllProductsUseCase>(
    "FindAllProductsUseCase",
    FindAllProductsUseCase
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


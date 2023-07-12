import { injectable } from "tsyringe";
import { prisma } from "../../../../core/external/prisma";

import { Product } from "../../domain/entities/Product";
import { IProductDataSource } from "../../infra/datasources/IProductDataSource";

@injectable()
export class PrismaProductDataSource implements IProductDataSource {

    async create(data: Product): Promise<void> {
        await prisma.product.create({
            data: {
                ...data.props
            }
        })
    }

    async findById(id: string): Promise<Product> {
        const prismaProduct = await prisma.product.findUnique({
            where: {id}
        })
        const product = new Product(
            { ...prismaProduct },
        prismaProduct.id
        )
        return product
    }

    async update(data: Product): Promise<void> {
       await prisma.product.update({
        where: {id: data.id},
        data: {
            ...data.props
        }
       })
    }

    async findAll(): Promise<Product[]> {
        const prismaProduct = await prisma.product.findMany()

        const product = prismaProduct.map((e) => {
            return new Product (
              {
              ...e
              },
              e.id
            )
        })

        return product
    }

    
}
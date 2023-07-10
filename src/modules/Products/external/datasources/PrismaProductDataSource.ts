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

    async update(data: Product): Promise<void> {
       await prisma.product.update({
        where: {id: data.id},
        data: {
            ...data.props
        }
       })
    }
}
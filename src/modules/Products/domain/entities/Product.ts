import { Entity } from "../../../../core/domain/Enity";

export type ProductProps = {
    name?: string;
    imageUrl?: string;
    price?: number;

}

export class Product extends Entity<ProductProps> {
    constructor(props: ProductProps, id?: string) {
        super(props, id);
      }
}
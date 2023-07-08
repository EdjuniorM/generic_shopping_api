import { Router } from "express";
import { productRoutes } from "../../../modules/Products/presenter/products.routes";

export const routes = Router();

routes.use("/product", productRoutes)

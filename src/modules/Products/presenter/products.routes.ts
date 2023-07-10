import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductController";
import { UpdateProductController } from "./controllers/UpdateProductController";

const createProductController = new CreateProductController();
const updateProductController = new UpdateProductController();

export const productRoutes = Router();


productRoutes.post("/create", createProductController.execute)

productRoutes.put("/:id", updateProductController.execute)
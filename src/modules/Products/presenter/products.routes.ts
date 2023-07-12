import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductController";
import { UpdateProductController } from "./controllers/UpdateProductController";
import { FindProductByIdController } from "./controllers/FindProductByIdController";

const createProductController = new CreateProductController();
const updateProductController = new UpdateProductController();
const findProductByIdController = new FindProductByIdController()

export const productRoutes = Router();


productRoutes.post("/create", createProductController.execute)

productRoutes.get("/:id", findProductByIdController.execute)

productRoutes.put("/:id", updateProductController.execute)
import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductController";

const createProductController = new CreateProductController();

export const productRoutes = Router();


productRoutes.post("/create", createProductController.execute)
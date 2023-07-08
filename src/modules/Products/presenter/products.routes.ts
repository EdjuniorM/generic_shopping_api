import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductController";

const createProductController = new CreateProductController();

export const productRoutes = Router();


productRoutes.get("/create", createProductController.execute)
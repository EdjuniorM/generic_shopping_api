import express = require("express");
import "express-async-errors";
import cors = require("cors");
import { routes } from "./routes/routes.routes";
import { errors } from "celebrate";
import { AppErrorMiddleware } from "./middlewares/AppError.middleware";


export const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(errors());

app.use(AppErrorMiddleware);


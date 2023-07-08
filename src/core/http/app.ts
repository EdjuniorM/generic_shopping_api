import express = require("express");
import "express-async-errors";
import cors = require("cors");
import { routes } from "./routes/routes.routes";
import { errors } from "celebrate";


export const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(errors());


import "reflect-metadata";
import "dotenv/config";
import "../container";
import { app } from "./app";

app.listen(process.env.PORT, async () =>
  console.log(`Server running on port ${process.env.PORT} `)
);

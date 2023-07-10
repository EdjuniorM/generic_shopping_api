import { Request, Response, NextFunction, response } from "express";
import { AppError } from "../../errors/AppError";

export const AppErrorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    console.log(`Status Code: ${err.statusCode}, Message: ${err.message}`);
    return res.status(err.statusCode).json({
      statusCode: err.statusCode,
      status: "error",
      message: err.message,
    });
  }

  console.error(
    `Status Code: 500, Message: ${err.message || "Internal Server Error"}`
  );

  return res.status(500).json({
    statusCode: 500,
    status: "error",
    message: "Internal server error",
  });
};

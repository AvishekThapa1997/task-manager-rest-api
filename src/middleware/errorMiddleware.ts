import { Request, Response, NextFunction } from "express";
import HttpException from "../util/HttpException";
const errorMiddleware = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(error.statusCode).json({
    statusCode: error.statusCode,
    message: error.message,
  });
};
export default errorMiddleware;

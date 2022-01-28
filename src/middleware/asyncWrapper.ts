import { Request, Response, NextFunction } from "express";
import HttpException from "../util/HttpException";
const asyncWrapper = (
  operation: (req: Request, res: Response, next: NextFunction) => Promise<void>
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await operation(req, res, next);
    } catch (err) {
      console.log(err);
      next(new HttpException());
    }
  };
};
export default asyncWrapper;

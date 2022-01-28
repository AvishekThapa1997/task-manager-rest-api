import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
const validationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    const errors: any = {};
    validationErrors
      .array({
        onlyFirstError: true,
      })
      .forEach((err) => {
        errors[err.param] = err.msg;
      });
    return res.status(422).send({
      errors,
    });
  }
  next();
};
export default validationMiddleware;

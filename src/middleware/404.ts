import { Request, Response } from "express";
const notFoundMiddleware = (req: Request, res: Response) => {
  res.status(404).json({
    statusCode: 404,
    message: "Resource not found",
  });
};
export default notFoundMiddleware;

import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const routeNotFoundMiddleware = (req: Request, res: Response) => {
  res.status(StatusCodes.NOT_FOUND).json({
    errorMessage: "Route not found",
  });
};

/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export class ErrorHandler extends Error {
  statusCode: number;

  constructor(statusCode: number, errorMessage: string) {
    super(errorMessage);
    this.statusCode = statusCode;
  }
}

export const errorHandlerMiddleware = (
  error: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!error.statusCode) console.log(error);
  const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = error.message || "Internal Server Error";
  res.status(statusCode).json({ errorMessage: message });
};

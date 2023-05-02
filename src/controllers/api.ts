import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

// Controller to endpoint example
export const endpointTest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.status(StatusCodes.OK).json({ status: "Successful!" });
  } catch (error) {
    console.log("Error in loadApiEndpoints: ", error);
    next(error);
  }
};

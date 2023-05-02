import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

const secretKey = String(process.env.SECRET_KEY);

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = String(req.headers.authorization);
  if (!authHeader) {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ errorMessage: "Authorization header not found" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ errorMessage: "Token not found" });
  }

  try {
    const decodedToken = jwt.verify(token, secretKey);
    res.locals.user = decodedToken;
    next();
  } catch (error) {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ errorMessage: "Invalid token" });
  }
};

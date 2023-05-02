import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ObjectSchema } from "joi";

export const validateBodyRequest = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => {
        return { field: err.path[0], message: err.message };
      });
      return res.status(StatusCodes.BAD_REQUEST).json({ errors });
    }
    next();
  };
};

import Joi from "joi";
import { Customer } from "../models";

export const customerSchema = Joi.object<Customer>({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
});

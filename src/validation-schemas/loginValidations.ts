import Joi from "joi";

export const loginSchema = Joi.object({
  user: Joi.string().required(),
  pass: Joi.string().required(),
});

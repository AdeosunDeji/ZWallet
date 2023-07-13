import Joi from "joi";
import { IUser, ILogin } from "../utils/interface";

export const validateSignup = (user: IUser) => {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(20).required(),
    lastName: Joi.string().min(2).max(20).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6).max(16),
  });
  return schema.validate(user);
};

export const validateLogin = (login: ILogin) => {
  const schema = Joi.object({
    EmailPhone: Joi.string().required(),
    password: Joi.string().required(),
  });
  return schema.validate(login);
};


export const validateEmail = (user: IUser) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
  });
  return schema.validate(user);
};


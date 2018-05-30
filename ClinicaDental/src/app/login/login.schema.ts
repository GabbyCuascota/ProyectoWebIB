import * as Joi from 'joi';

export const LOGIN_SCHEMA = Joi
  .object()
  .keys({
    contraseña: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),

    usuario: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
  });


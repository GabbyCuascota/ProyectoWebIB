import * as Joi from 'joi';

export const LOGIN_SCHEMA = Joi
  .object()
  .keys({
    batanSucursal: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),

    cumbayaSucursal: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
  });


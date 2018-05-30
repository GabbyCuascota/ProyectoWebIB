import * as Joi from 'joi';

export const CLINICA_SCHEMA = Joi
  .object()
  .keys({
    telefonoClinica: Joi
      .number()
      .integer()
      .greater(0)
      .less(150),

    direccionClinica: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
  });


import * as Joi from 'joi';

export const HISTORIALES_SCHEMA = Joi
  .object()
  .keys({
    pacienteHistorial: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),

    fichaHistorial: Joi
      .number()
      .integer()
      .greater(0)
      .less(150),
  });


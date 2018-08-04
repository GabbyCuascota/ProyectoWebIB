import * as Joi from 'joi';

export const ESPECIALIDADES_SCHEMA = Joi
  .object()
  .keys({
    endodoncia: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),

    odontopediatria: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),

    ortodoncia: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),

    consultaMedica: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
  });


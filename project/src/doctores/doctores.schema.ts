import * as Joi from 'joi';

export const DOCTOR_SCHEMA = Joi
  .object()
  .keys({
    nombreDoctor: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),

    apellidoDoctor: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),

    especialidadDoctor: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),

    telefonoDoctor: Joi
      .number()
      .integer()
      .greater(0)
      .less(150),

      celularDoctor: Joi
          .number()
          .integer()
          .greater(0)
          .less(150),
  });

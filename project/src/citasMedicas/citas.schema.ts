import * as Joi from 'joi';

export const CITA_SCHEMA = Joi
    .object()
    .keys({
        idCita: Joi
            .number()
            .integer()
            .required(),

        fechaCita: Joi
            .string()
            .required()
            .regex(/^[0-9]{6,8}$/)
            .min(6)
            .max(8),

        horaCita: Joi
            .string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),

        lugarCita: Joi
            .string()
            .required()
            .regex(/^[a-zA-Z ]{3,30}$/)
            .min(3)
            .max(30),
    });


import * as Joi from 'joi';

export const CLINICA_SCHEMA = Joi
    .object()
    .keys({
        telefonoClinica: Joi
            .string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),

        direccionClinica: Joi
            .string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
    });


import * as Joi from 'joi';

export const LOGIN_SCHEMA = Joi
    .object()
    .keys({
        contrasenia: Joi
            .string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),

        username: Joi
            .string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
    });


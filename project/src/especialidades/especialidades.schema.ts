import * as Joi from 'joi';

export const ESPECIALIDADES_SCHEMA = Joi
    .object()
    .keys({
        cirugia: Joi
            .string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),

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

        periodoncia: Joi
            .string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),

        rehabilitacion: Joi
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


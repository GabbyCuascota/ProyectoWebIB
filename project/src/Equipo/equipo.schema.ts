import * as Joi from 'joi';

export const EQUIPO_SCHEMA = Joi
    .object()
    .keys({
            id: Joi
                .number()
                .integer()
                .required(),
            nombre: Joi
                .string()
                .required()
                .regex(/^[a-zA-Z ]{3,30}$/)
                .min(3)
                .max(30),
            liga: Joi
                .string()
                .required()
                .regex(/^[a-zA-Z ]{3,30}$/)
                .min(3)
                .max(30),
            fechaCreacion: Joi
                .string()
                .required()
                .regex(/^[0-9]{6,8}$/)
                .min(6)
                .max(8),
            numeroCopasInternacionales: Joi
                .number()
                .integer()
                .required(),
            campeonActual: Joi
                .boolean()
                .required(),
        }
    )
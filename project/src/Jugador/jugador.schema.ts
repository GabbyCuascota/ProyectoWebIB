import * as Joi from 'joi';

export const JUGADORES_SCHEMA = Joi
    .object()
    .keys({
        id: Joi
            .number()
            .integer()
            .required(),
        nombreCamiseta: Joi
            .string()
            .required()
            .regex(/^[a-zA-Z ]{3,30}$/)
            .min(3)
            .max(30),
        numeroCamiseta: Joi
            .number()
            .required(),
        nombreCompletoJugador: Joi
            .string()
            .required()
            .regex(/^[a-zA-Z ]{3,150}$/)
            .min(3)
            .max(150),
        poderEspecialDos: Joi
            .string()
            .required()
            .regex(/^[a-zA-Z ]{3,150}$/)
            .min(3)
            .max(150),
        fechaIngresoEquipo: Joi
            .string()
            .required()
            .regex(/^[0-9]{6,8}$/)
            .min(6)
            .max(8),
        goles: Joi
            .number()
            .required(),
        equipoId: Joi
            .number()
            .integer()
            .required(),
        }
    )
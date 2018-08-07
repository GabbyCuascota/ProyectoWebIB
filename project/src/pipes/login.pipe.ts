import {ArgumentMetadata, Injectable, NotFoundException, PipeTransform} from '@nestjs/common';
import * as Joi from 'joi';

@Injectable()
export class LoginPipe implements PipeTransform<any> {
    constructor(private readonly _loginSchema) {
    }

    transform(value: any, metadata: ArgumentMetadata) {
        const {error} = Joi.validate(value, this._loginSchema);
        if (error) {
            throw new NotFoundException(error);
        }
        return value;
    }
}
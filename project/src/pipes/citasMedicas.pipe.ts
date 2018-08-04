/*import * as Joi from 'joi';
import {Injectable, PipeTransform} from "@angular/core";


@Injectable()
export class CitasMedicasPipe implements PipeTransform {
  constructor(private readonly _schema) {
  }
  transform(jsonAValidar: any, metadata: ArgumentMetadata) {
    const {
      error
    } = Joi.validate(jsonAValidar, this._schema);
    if (error) {
      throw new PeticionErroneaException(
        {
          error: error,
          mensaje: 'Json no valido'
        },
        10
      );
    } else {
      return jsonAValidar;
    }
  }
}
*/

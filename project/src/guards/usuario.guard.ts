import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Observable} from "rxjs/index";
import {Reflector} from "@nestjs/core";


@Injectable()
export class UsuarioGuard implements CanActivate {

    constructor(private readonly reflector: Reflector) {
    }

    canActivate(
        context: ExecutionContext)
        : boolean |
        Promise<boolean> |
        Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const cabeceras = request.headers;

        const permisos = this.reflector
            .get(
                'permisos',
                context.getHandler()
            );

        console.log('Permisos: ', permisos);


        console.log('Contexto: ', context);
        console.log('Cabeceras: ', request.headers);

        if (cabeceras.hola === "Usuario") {
            return true
        } else {
            return false;
        }
    }

}
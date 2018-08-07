import {Body, Controller, HttpCode, NotFoundException, Post} from "@nestjs/common";
import {LoginService} from "./login.service";
import {LOGIN_SCHEMA} from "./login.schema";
import {LoginPipe} from "../pipes/login.pipe";
import {InvalidException} from "../exceptions/Invalid.exception";
import {JwtService} from "../json-web-token/jwt.service";

@Controller('login')
export class LoginController {
    constructor(
        private readonly _loginService: LoginService,
        private readonly _jwtService: JwtService,
    ) {
    }

    @Post()
    @HttpCode(200)
    async login(@Body(new LoginPipe(LOGIN_SCHEMA)) login) {
        const usuario = await this._loginService.findForLogin(login.username, login.contrasenia);
        if (usuario) {
            const jwt = this._jwtService.emitirToken(usuario.id);
            return `{ "jwt": { "token": "${jwt}"}, "usuario":${JSON.stringify(usuario)}}`;
        }
        throw new NotFoundException('Something went wrong. Please, try again.');
    }
}
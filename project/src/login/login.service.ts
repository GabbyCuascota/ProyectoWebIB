import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {UsuarioEntity} from "../Usuario/usuario.entity";


@Injectable()
export class LoginService {

    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly _usuarioRepository: Repository<UsuarioEntity>,
    ){}

    async findForLogin(username: string, contrasenia: string): Promise<UsuarioEntity>{
        return await this._usuarioRepository.findOne({ where: { username, contrasenia} });
    }
}
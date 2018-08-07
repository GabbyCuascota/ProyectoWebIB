import {Body, Controller, Get, Param, Post, Put, Req, Res} from "@nestjs/common";
import {NotFoundException} from "../exceptions/NotFound.exception";
import {ClinicaService} from "./clinica.service";
import {ClinicaEntity} from "./clinica.entity";

@Controller('clinica')
export class ClinicaController {

    constructor(private _clinicaService: ClinicaService) {}

    @Get()
    async listarTodos(
        @Res() response,
        @Req() request,
    ) {
        const clinicas = await this._clinicaService.traerTodosClinicas();
        return response.send(clinicas);
    }
    @Get('por/id/:idClinica')
    async obtenerClinicaPorId(
        @Param() paramParams,
        @Res() response
    ) {
        const clinica = await this._clinicaService.obtenerClinicaPorId(paramParams.idClinica);
        return response.send(clinica);
    }
    @Post()
    async crearClinicaBase() {
        const usuarios = this._clinicaService.crearClinica();
        return usuarios;
    }
}
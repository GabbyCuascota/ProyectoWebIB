import {Body, Controller, Get, Param, Post, Put, Req, Res} from "@nestjs/common";
import {DoctoresEntity} from "./doctores.entity";
import {DoctoresService} from "./doctores.service";

@Controller('doctor')
export class DoctoresController {

    constructor(private _usuarioService: DoctoresService) {}

    @Get()
    async listarTodos(
        @Res() response,
        @Req() request,
    ) {
        const doctores = await this._usuarioService.traerTodosDoctores();
        return response.send(doctores);
    }

    @Get('por/id/:idDoctor')
    async obtenerDoctorPorId(
        @Param() paramParams,
        @Res() response
    ) {
        const doctor = await this._usuarioService.obtenerDoctorPorId(paramParams.idDoctor);
        return response.send(doctor);
    }
    @Post()
    async crearDoctoresBase() {
        const doctores = this._usuarioService.crearDoctor();
        return doctores;
    }
}
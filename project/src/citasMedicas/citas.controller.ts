import {Controller, Get, Param, Post, Req, Res} from "@nestjs/common";
import {CitasEntity} from "./citas.entity";
import {CitasService} from "./citas.service";

@Controller('Cita')
export class CitasController {

    constructor(private _citasService: CitasEntity) {
    }

    @Get()
    async listarTodos(
        @Res() response,
        @Req() request,
    ) {
        const citas = await this._citasService.traerTodos();
        return response.send(citas);
    }

    @Get('/:paramBusqueda')
    async buscar(
        @Param() paramParams,
        @Res() response
    ) {
        const usuarios = await this._citasService.buscar(paramParams.paramBusqueda);
        return response.send(usuarios);
    }

    @Get('/porUsuario/:idUsuario')
    async obtenerCitaPorUsuario(
        @Param() paramParams,
        @Res() response
    ) {
        const usuarios = await this._citasService.traerCitasPorUsuario(paramParams.idUsuario);
        return response.send(usuarios);
    }

    @Post()
    async crearCitaBase() {
        const citas = this._citasService.crearCitas();
        return citas;
    }
}
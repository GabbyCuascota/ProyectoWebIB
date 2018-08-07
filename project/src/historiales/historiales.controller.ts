import {Controller, Get, Param, Post, Req, Res} from "@nestjs/common";
import {HistorialesEntity} from "./historiales.entity";
import {HistorialesService} from "./historiales.service";

@Controller('historiasles')
export class UsuarioController {

    constructor(private _usuarioService: HistorialesEntity) {
    }

    @Get()
    async listarTodos(
        @Res() response,
        @Req() request,
    ) {
        /*const historiales = await this._usuarioService.traerTodosHistoriales();
        return response.send(historiales);*/
    }

    @Get('por/id/:idHistorial')
    async obtenerHistorialPorId(
        @Param() paramParams,
        @Res() response
    ) {
        /*const historial = await this._usuarioService.obtenerHistorialPorId(paramParams.idHistorial);
        return response.send(historial);*/
    }

    @Post()
    async crearHistorialBase() {
       /* const historiales = this._usuarioService.crearHistorial();
        return historiales;*/
    }
}
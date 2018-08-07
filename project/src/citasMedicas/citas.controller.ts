import {Controller, Get, Param, Post, Req, Res} from "@nestjs/common";
import {CitasEntity} from "./citas.entity";

@Controller('Cita')
export class CitasController {

    constructor(private _citasService: CitasEntity) {
    }

    @Get()
    async listarTodos(
        @Res() response,
        @Req() request,
    ) {
        /*const citas = await this._citasService.traerTodosCitas();
        return response.send(citas);*/
    }

    @Get('por/id/:idCitas')
    async obtenerCitasPorId(
        @Param() paramParams,
        @Res() response
    ) {
        /* const cita = await this._citasService.traerCitasPorId(paramParams.idCita);
         return response.send(cita);*/
    }

    @Post()
    async crearCitasBase() {
        /* const citas = this._citasService.crearCitas();
         return citas;*/
    }
}
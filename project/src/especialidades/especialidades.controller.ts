import {Controller, Get, Param, Req, Res} from "@nestjs/common";
import {EspecialidadesService} from "./especialidades.service";

@Controller('especialidad')
export class EspecialidadesController {

    constructor(private _especialidadesService: EspecialidadesService) {
    }

    @Get()
    async listarTodos(
        @Res() response,
        @Req() request,
    ) {
        const especialidades = await this._especialidadesService.traerTodosEspecialidades();
        return response.send(especialidades);
    }

    @Get('por/id/:idEspecialidad')
    async obtenerEspecialidadesPorId(
        @Param() paramParams,
        @Res() response
    ) {
        const especialidad = await this._especialidadesService.obtenerEspecialidadesPorId(paramParams.idEspecialidad);
        return response.send(especialidad);
    }
}
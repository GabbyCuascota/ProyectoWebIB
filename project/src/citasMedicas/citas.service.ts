import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CitasEntity} from "./citas.entity";


@Injectable()
export class CitasService {


    listaCitas = [
        {'idCita': 1, 'fechaCita': '12-10-2018', 'horaCita': '15:00', 'lugarCita': 'Sucursal Cumbaya', 'usuarioId': 3},
        {'idCita': 2, 'fechaCita': '13-10-2018', 'horaCita': '15:50', 'lugarCita': 'Sucursal Cumbaya', 'usuarioId': 8},
        {'idCita': 3, 'fechaCita': '14-10-2018', 'horaCita': '17:00', 'lugarCita': 'Matriz El Batán', 'usuarioId': 2},
        {'idCita': 4, 'fechaCita': '15-10-2018', 'horaCita': '11:00', 'lugarCita': 'Sucursal Cumbaya', 'usuarioId': 6},
        {'idCita': 5, 'fechaCita': '16-10-2018', 'horaCita': '13:00', 'lugarCita': 'Sucursal Cumbaya', 'usuarioId': 4},
        {'idCita': 6, 'fechaCita': '16-10-2018', 'horaCita': '16:00', 'lugarCita': 'Matriz El Batán', 'usuarioId': 7},
    ];

    constructor(@InjectRepository(CitasEntity)
                private readonly citasRepository: Repository<CitasEntity>) {
    }

    crearCitas() {
        for (var citas in this.listaCitas) {
            const cita = new CitasEntity();
            cita.idCita = this.listaCitas[citas].idCita;
            cita.fechaCita = this.listaCitas[citas].fechaCita;
            cita.horaCita = this.listaCitas[citas].horaCita;
            cita.lugarCita = this.listaCitas[citas].lugarCita;
            this.citasRepository.save(cita);
        }
        return this.citasRepository.find();
    }

    async traerTodosCitas(): Promise<CitasEntity[]> {
        return await this.citasRepository.find();
    }

    async traerCitasPorId(idCita): Promise<CitasEntity[]> {
        return await this.citasRepository.find({where: {idCita: idCita}});
    }
}

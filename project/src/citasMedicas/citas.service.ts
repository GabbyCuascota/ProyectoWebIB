import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Like, Repository} from "typeorm";
import {UsuarioEntity} from "../Usuario/usuario.entity";
import {CitasEntity} from "../../../ClinicaDental/src/app/citasMedicas/citas.entity";


@Injectable()
export class CitasService {


    listaCitas = [
        {'id': 1, 'fecha': '12-10-2018', 'hora': '15:00', 'lugar': 'Sucursal Cumbaya', 'usuarioId': 3},
        {'id': 2, 'fecha': '13-10-2018', 'hora': '15:50', 'lugar': 'Sucursal Cumbaya', 'usuarioId': 8},
        {'id': 3, 'fecha': '14-10-2018', 'hora': '17:00', 'lugar': 'Matriz El Batán', 'usuarioId': 2},
        {'id': 4, 'fecha': '15-10-2018', 'hora': '11:00', 'lugar': 'Sucursal Cumbaya', 'usuarioId': 6},
        {'id': 5, 'fecha': '16-10-2018', 'hora': '13:00', 'lugar': 'Sucursal Cumbaya', 'usuarioId': 4},
        {'id': 6, 'fecha': '16-10-2018', 'hora': '16:00', 'lugar': 'Matriz El Batán', 'usuarioId': 7},
    ];

    constructor(@InjectRepository(CitasEntity)
                private readonly citasRepository: Repository<CitasEntity>) {
    }

    crearCitas() {
        for (var citas in this.listaCitas) {
            const cita = new CitasEntity();
            cita.idCita = this.listaCitas[citas].id;
            cita.fechaCita = this.listaCitas[citas].fecha;
            cita.horaCita = this.listaCitas[citas].hora;
            cita.lugarCita = this.listaCitas[citas].lugar;

            const usuario = new UsuarioEntity();
            usuario.id = this.listaCitas[citas].usuarioId;
            cita.usuarioId = usuario;
            this.citasRepository.save(cita);
        }
        return this.citasRepository.find();
    }

    async traerTodos(): Promise<CitasEntity[]> {
        return await this.citasRepository.find();
    }

    async buscar(parametroBusqueda) {

        return await this.citasRepository.find({fechaCita: Like("%" + parametroBusqueda + "%")});
    }

    async traerCitasPorUsuario(usuarioID): Promise<CitasEntity[]> {
        return await this.citasRepository.find({where: {usuarioId: usuarioID}});
    }


}

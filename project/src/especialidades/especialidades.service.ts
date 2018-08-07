import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Like, Repository} from "typeorm";
import {EspecialidadesEntity} from "./especialidades.entity";

@Injectable()
export class EspecialidadesService {

    constructor(@InjectRepository(EspecialidadesEntity)
                private readonly especialidadesRepository: Repository<EspecialidadesEntity>) {
    }

    async traerTodosEspecialidades(): Promise<EspecialidadesEntity[]> {
        return await this.especialidadesRepository.find();
    }

    async obtenerEspecialidadesPorId(idEspecialidad) {
        return await this.especialidadesRepository.find({where: {id: idEspecialidad}})
    }
}
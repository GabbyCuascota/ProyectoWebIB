import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {HistorialesEntity} from "./historiales.entity";

@Injectable()
export class HistorialesService {

    listaHistoriales = [
        {
            'idHistorial': 1,
            'pacienteHistorial': 'Gabriela Cuascota',
            'fichaHistorial': 1,
        },
        {
            'idHistorial': 2,
            'pacienteHistorial': 'Martin Balarezo',
            'fichaHistorial': 2,
        },
        {
            'idHistorial': 3,
            'pacienteHistorial': 'Evelyn Armas',
            'fichaHistorial': 3,
        },
        {
            'idHistorial': 4,
            'pacienteHistorial': 'Jessica Quiroga',
            'fichaHistorial': 4,
        },
        {
            'idHistorial': 5,
            'pacienteHistorial': 'Gabriela Silva',
            'fichaHistorial': 5,
        },
        {
            'idHistorial': 6,
            'pacienteHistorial': 'Ivan Borja',
            'fichaHistorial': 6,
        },
        {
            'idHistorial': 7,
            'pacienteHistorial': 'Rakel Balarezo',
            'fichaHistorial': 7,
        },
        {
            'idHistorial': 8,
            'pacienteHistorial': 'Jose Cuascota',
            'fichaHistorial': 8,
        }
    ];

    constructor(@InjectRepository(HistorialesEntity)
                private readonly historialRepository: Repository<HistorialesEntity>) {
    }

    crearHistorial() {
        for (var historiales in this.listaHistoriales) {
            const historial = new HistorialesEntity();
            historial.idHistorial = this.listaHistoriales[historiales].idHistorial;
            historial.pacienteHistorial = this.listaHistoriales[historiales].pacienteHistorial;
            historial.fichaHistorial = this.listaHistoriales[historiales].fichaHistorial;
            this.historialRepository.save(historial);
        }
        return this.historialRepository.find();
    }

    async traerTodosHistoriales(): Promise<HistorialesEntity[]> {
        return await this.historialRepository.find();
    }

    async obtenerHistorialPorId(idHistorial) {
        return await this.historialRepository.find({where: {id: idHistorial}})
    }
}
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ClinicaEntity} from "./clinica.entity";

@Injectable()
export class ClinicaService {

    listaClinicas = [
        {
            'idClinica': 1,
            'telefonoClinica': '2440564',
            'direccionClinica': 'El Batan, Eloy Alfaro y Portugal',
        },
        {
            'idClinica': 2,
            'telefonoClinica': '2445637',
            'direccionClinica': 'Cumbaya. Universidad San Francisco',
        }
    ];

    constructor(@InjectRepository(ClinicaEntity)
                private readonly clinicaRepository: Repository<ClinicaEntity>) {
    }

    crearClinica() {
        for (var clinicas in this.listaClinicas) {
            const clinica = new ClinicaEntity();
            clinica.idClinica = this.listaClinicas[clinicas].idClinica;
            clinica.telefonoClinica = this.listaClinicas[clinicas].telefonoClinica;
            clinica.direccionClinica = this.listaClinicas[clinicas].direccionClinica;
            this.clinicaRepository.save(clinica);
        }
        return this.clinicaRepository.find();
    }

    async traerTodosClinicas(): Promise<ClinicaEntity[]> {
        return await this.clinicaRepository.find();
    }

    async obtenerClinicaPorId(idClinica) {
        return await this.clinicaRepository.find({where: {id: idClinica}})
    }
}
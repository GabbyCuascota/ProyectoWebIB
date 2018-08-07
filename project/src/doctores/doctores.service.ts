import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Like, Repository} from "typeorm";
import {DoctoresEntity} from "./doctores.entity";

@Injectable()
export class DoctoresService {

    listaDoctores = [
        {
            'idDoctor': 1,
            'nombreDoctor': 'Lucia',
            'apellidoDoctor': 'Rivadeneira',
            'especialidadDoctor': 'Ortodoncia',
            'telefonoDoctor': 2463789,
            'celularDoctor': 986758493
        },
        {
            'idDoctor': 2,
            'nombreDoctor': 'Sabina',
            'apellidoDoctor': 'Cañadas',
            'especialidadDoctor': 'Periodoncia',
            'telefonoDoctor': 2463849,
            'celularDoctor': 856478390
        },
        {
            'idDoctor': 3,
            'nombreDoctor': 'Juan',
            'apellidoDoctor': 'Salazar',
            'especialidadDoctor': 'Cirugia',
            'telefonoDoctor': 2765849,
            'celularDoctor': 856478900
        },
        {
            'idDoctor': 4,
            'nombreDoctor': 'Ana',
            'apellidoDoctor': 'Montenegro',
            'especialidadDoctor': 'Medicina General',
            'telefonoDoctor': 2712349,
            'celularDoctor': 856567900
        },
        {
            'idDoctor': 5,
            'nombreDoctor': 'Karina',
            'apellidoDoctor': 'Lopez',
            'especialidadDoctor': 'Endodoncia',
            'telefonoDoctor': 2987349,
            'celularDoctor': 856566530
        },
        {
            'idDoctor': 5,
            'nombreDoctor': 'Valeri',
            'apellidoDoctor': 'Paredez',
            'especialidadDoctor': 'Rehabilitación Oral',
            'telefonoDoctor': 2123349,
            'celularDoctor': 890766530
        }
    ];

    constructor(@InjectRepository(DoctoresEntity)
                private readonly doctorRepository: Repository<DoctoresEntity>) {
    }

    crearDoctor() {
        for (var doctores in this.listaDoctores) {
            const doctor = new DoctoresEntity();
            doctor.idDoctor = this.listaDoctores[doctores].idDoctor;
            doctor.nombreDoctor = this.listaDoctores[doctores].nombreDoctor;
            doctor.apellidoDoctor = this.listaDoctores[doctores].apellidoDoctor;
            doctor.especialidadDoctor = this.listaDoctores[doctores].especialidadDoctor;
            doctor.telefonoDoctor = this.listaDoctores[doctores].telefonoDoctor;
            doctor.celularDoctor = this.listaDoctores[doctores].celularDoctor;
            this.doctorRepository.save(doctor);
        }
        return this.doctorRepository.find();
    }

    async traerTodosDoctores(): Promise<DoctoresEntity[]> {
        return await this.doctorRepository.find();
    }

    async obtenerDoctorPorId(idDoctor) {
        return await this.doctorRepository.find({where: {id: idDoctor}})
    }
}
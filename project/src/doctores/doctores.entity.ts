import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ClinicaEntity} from "../clinica/clinica.entity";


@Entity('web_proyecto_doctores')
export class DoctoresEntity {
    @PrimaryGeneratedColumn()
    idDoctor: number;

    @Column({length: 20})
    nombreDoctor: string;

    @Column({length: 20})
    apellidoDoctor: string;

    @Column({length: 50})
    especialidadDoctor: string;

    @Column()
    telefonoDoctor: number;

    @Column()
    celularDoctor: number;

    @ManyToOne(
        type => ClinicaEntity,
        clinicaEntity => clinicaEntity.doctores)
    clinicas: ClinicaEntity[];
}

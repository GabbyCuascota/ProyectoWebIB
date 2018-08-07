import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ClinicaEntity} from "../clinica/clinica.entity";
import {LoginEntity} from "../login/login.entity";


@Entity('web_proyecto_pacientes')
export class PacienteEntity {
    @PrimaryGeneratedColumn()
    idPaciente: number;

    @Column({length: 20})
    nombrePaciente: string;

    @Column({length: 20})
    apellidoPaciente: string;

    @Column({length: 50})
    direccionPaciente: string;

    @Column()
    telefonoPaciente: number;

    @Column()
    edadPaciente: number;

    @Column()
    cedulaPaciente: number;

    @ManyToOne(
        type => ClinicaEntity,
        clinicaEntity => clinicaEntity.pacientes)
    clinicas: ClinicaEntity[];

    @ManyToOne(
        type => LoginEntity,
        loginEntity => loginEntity.logins)
    pacientes: LoginEntity[];
}

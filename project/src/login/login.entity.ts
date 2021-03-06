import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {PacienteEntity} from "../paciente/paciente.entity";


@Entity('web_proyecto_login')
export class LoginEntity {

    @PrimaryGeneratedColumn()
    idLogin: number;

    @Column({length: 30})
    contrasenia: string;

    @Column({length: 50})
    username: string;

    @OneToMany(
        type => PacienteEntity,
        citasEntity => citasEntity.pacientes)
    logins: PacienteEntity[];
}

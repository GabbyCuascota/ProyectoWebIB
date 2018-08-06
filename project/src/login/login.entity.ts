import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {PacienteEntity} from "../paciente/paciente.entity";


@Entity('web_proyecto_login')
export class LoginEntity {

    @PrimaryGeneratedColumn()
    idLogin: number;

    @Column()
    contrasena: string;

    @Column({length: 50})
    usuario: string;

    @OneToMany(
        type => PacienteEntity,
        citasEntity => citasEntity.pacientes)
    logins: PacienteEntity[];
}

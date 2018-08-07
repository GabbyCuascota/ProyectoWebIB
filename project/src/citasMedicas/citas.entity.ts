import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../Usuario/usuario.entity";
import {HistorialesEntity} from "../historiales/historiales.entity";
import {ClinicaEntity} from "../clinica/clinica.entity";


@Entity('web_proyecto_citas')
export class CitasEntity {
    @PrimaryGeneratedColumn()
    idCita: number;

    @Column()
    fechaCita: string;

    @Column()
    horaCita: string;

    @Column()
    lugarCita: string;

    @ManyToOne(
        type => ClinicaEntity,
        clinicaEntity => clinicaEntity.citas)
    clinicas: ClinicaEntity[];

    @ManyToOne(
        type => HistorialesEntity,
        historialesEntity => historialesEntity.citas)
    historiales: HistorialesEntity[];

    @ManyToOne(
        type => UsuarioEntity,
        usuarioEntity => usuarioEntity.citas)
    usuarioId: UsuarioEntity;

}

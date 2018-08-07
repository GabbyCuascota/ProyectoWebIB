import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {CitasEntity} from "../citasMedicas/citas.entity";

@Entity('usuario')
export class UsuarioEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500})
    nombre: string;

    @Column({length: 500})
    contrasena: string;

    @Column({length: 2000})
    urlImg: string;

    @OneToMany(
        type => CitasEntity,
        citasEntity => citasEntity.usuarioId)
    citas: CitasEntity [];
}
import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../Usuario/usuario.entity";
import {JugadorEntity} from "../Jugador/jugador.entity";

@Entity('equipo')
export class EquipoEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({ length: 500 })
    nombre: string;

    @Column({ length: 500 })
    liga: string;

    @Column({ length: 500 })
    fechaCreacion: string;

    @Column()
    numeroCopasInternacionales: number;

    @Column()
    campeonActual: boolean;

    @Column({ length: 2000 })
    urlImg: string;

    @ManyToOne(
        type => UsuarioEntity,
        usuario => usuario.equipos)
    usuarioId: UsuarioEntity;


    @OneToMany(
        type => JugadorEntity,
        jugador => jugador.equipoId)
    jugadores: EquipoEntity [];
}
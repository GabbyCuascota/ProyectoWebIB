import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {EquipoEntity} from "../Equipo/equipo.entity";

@Entity('jugador')
export class JugadorEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({ length: 500 })
    nombreCamiseta: string;

    @Column()
    numeroCamiseta: number;

    @Column({ length: 500 })
    nombreCompletoJugador: string;

    @Column({ length: 500 })
    poderEspecialDos: string;

    @Column({ length: 50})
    fechaIngresoEquipo: string;

    @Column()
    goles: number;

    @Column({ length: 2000 })
    urlImg: string;

    @ManyToOne(
        type => EquipoEntity,
        equipo => equipo.jugadores)
    equipoId: EquipoEntity;
}
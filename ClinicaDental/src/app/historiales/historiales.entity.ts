import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {CitasEntity} from "../citasMedicas/citas.entity";
import {ClinicaEntity} from "../clinica/clinica.entity";


@Entity('web_proyecto_historiales')
export class HistorialesEntity {

  @PrimaryGeneratedColumn()
  idHistorial: number;

  @Column({length: 40})
  pacienteHistorial: string;

  @Column()
  fichaHistorial: number;

  @OneToMany(
    type => CitasEntity,
    citasEntity => citasEntity.historiales)
  citas: CitasEntity[];

  @ManyToOne(
    type => ClinicaEntity,
    clinicaEntity => clinicaEntity.historiales)
  clinicas: ClinicaEntity[];
}



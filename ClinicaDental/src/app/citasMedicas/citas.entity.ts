import {Column, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ClinicaEntity} from "../clinica/clinica.entity";
import {HistorialesEntity} from "../historiales/historiales.entity";

@Entity('web_proyecto_citas')
export  class CitasEntity{
  @PrimaryGeneratedColumn()
  idCita: number;

  @Column()
  fechaCita: string;

  @Column()
  horaCita: string;

  @ManyToOne(
    type => ClinicaEntity,
    clinicaEntity => clinicaEntity.citas)
  clinicas: ClinicaEntity[];

  @ManyToOne(
    type => HistorialesEntity,
    historialesEntity => historialesEntity.citas)
  historiales: HistorialesEntity[];

}

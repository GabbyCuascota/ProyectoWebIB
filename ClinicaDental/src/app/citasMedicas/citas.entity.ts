import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ClinicaEntity} from "../clinica/clinica.entity";

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
}

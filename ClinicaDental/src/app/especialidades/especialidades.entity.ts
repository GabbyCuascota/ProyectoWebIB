import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ClinicaEntity} from "../clinica/clinica.entity";


@Entity('web_proyecto_especialidades')
export  class EspecialidadesEntity {
  @PrimaryGeneratedColumn()
  idEspecialidad: number;

  @Column({length: 40})
  endodoncia: string;

  @Column({length: 40})
  odontopediatria: string;

  @Column({length: 40})
  ortodoncia: string;

  @Column({length: 40})
  consultaMedica: string;

  @ManyToOne(
    type => ClinicaEntity,
    clinicaEntity => clinicaEntity.especialidades)
  clinicas: ClinicaEntity[];
}

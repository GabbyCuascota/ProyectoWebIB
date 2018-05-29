import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {CitasEntity} from "../citasMedicas/citas.entity";


@Entity('web_proyecto_clinica')
export class ClinicaEntity {

  @PrimaryGeneratedColumn()
  idClinica: number;

  @Column()
  telefonoClinica: number;

  @Column()
  direccionClinica: number;

  @OneToMany(
    type => CitasEntity,
    citasEntity => citasEntity.clinicas)

  citas: CitasEntity;
}

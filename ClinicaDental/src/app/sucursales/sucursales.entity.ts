import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ClinicaEntity} from "../clinica/clinica.entity";


@Entity('web_proyecto_sucursales')
export  class SucursalesEntity {
  @PrimaryGeneratedColumn()
  idSucursal: number;

  @Column({length: 30})
  batanSucursal: string;

  @Column({length: 30})
  cumbayaSucursal: string;

  @ManyToOne(
    type => ClinicaEntity,
    clinicaEntity => clinicaEntity.sucursales)
  clinicas: ClinicaEntity[];
}

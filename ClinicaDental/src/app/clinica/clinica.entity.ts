import {Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {CitasEntity} from "../citasMedicas/citas.entity";
import {HistorialesEntity} from "../historiales/historiales.entity";
import {PacienteEntity} from "../paciente/paciente.entity";
import {DoctoresEntity} from "../doctores/doctores.entity";
import {EspecialidadesEntity} from "../especialidades/especialidades.entity";
import {SucursalesEntity} from "../sucursales/sucursales.entity";


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
  citas: CitasEntity[];

  @OneToMany(
    type => HistorialesEntity,
    historialesEntity => historialesEntity.clinicas)
  historiales: HistorialesEntity[];

  @OneToMany(
    type => PacienteEntity,
    pacienteEntity => pacienteEntity.clinicas)
  pacientes: PacienteEntity[];

  @OneToMany(
    type => DoctoresEntity,
    doctoresEntity => doctoresEntity.clinicas)
  doctores: DoctoresEntity[];

  @OneToMany(
    type => EspecialidadesEntity,
    especialidadesEntity => especialidadesEntity.clinicas)
  especialidades: EspecialidadesEntity[];

  @OneToMany(
    type => SucursalesEntity,
    sucursalesEntity => sucursalesEntity.clinicas)
  sucursales: SucursalesEntity[];
}

import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AutorizacionController} from "./autorizacion.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./Usuario/usuario.entity";
import {UsuarioController} from "./Usuario/usuario.controller";
import {UsuarioService} from "./Usuario/usuario.service";
import {CitasEntity} from "./citasMedicas/citas.entity";
import {ClinicaEntity} from "../dist/clinica/clinica.entity";
import {DoctoresEntity} from "../dist/project/src/doctores/doctores.entity";
import {EspecialidadesEntity} from "../dist/project/src/especialidades/especialidades.entity";
import {HistorialesEntity} from "../../ClinicaDental/src/app/historiales/historiales.entity";
import {PacienteEntity} from "../../ClinicaDental/src/app/paciente/paciente.entity";
import {SucursalesEntity} from "../../ClinicaDental/src/app/sucursales/sucursales.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'baseproyecto',
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: true,
            //ssl: true,
        }),
        TypeOrmModule.forFeature([CitasEntity, ClinicaEntity, DoctoresEntity, EspecialidadesEntity,
            HistorialesEntity, PacienteEntity, SucursalesEntity, UsuarioEntity])
    ],
    controllers: [
        AppController,
        // EquipoController,
        //JugadorController,
        AutorizacionController,
        UsuarioController],
    providers: [
        AppService,
        //EquipoService,
        //JugadorService,
        UsuarioService
    ],
})

export class AppModule {
}

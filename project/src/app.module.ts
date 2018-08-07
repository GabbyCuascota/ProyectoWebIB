import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AutorizacionController} from "./autorizacion.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./Usuario/usuario.entity";
import {UsuarioController} from "./Usuario/usuario.controller";
import {UsuarioService} from "./Usuario/usuario.service";
import {CitasEntity} from "./citasMedicas/citas.entity";
import {LoginEntity} from "./login/login.entity";
import {ClinicaEntity} from "./clinica/clinica.entity";
import {DoctoresEntity} from "./doctores/doctores.entity";
import {EspecialidadesEntity} from "./especialidades/especialidades.entity";
import {HistorialesEntity} from "./historiales/historiales.entity";
import {PacienteEntity} from "./paciente/paciente.entity";
import {SucursalesEntity} from "./sucursales/sucursales.entity";

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
        TypeOrmModule.forFeature([
            CitasEntity,
            ClinicaEntity,
            DoctoresEntity,
            EspecialidadesEntity,
            HistorialesEntity,
            PacienteEntity,
            SucursalesEntity,
            UsuarioEntity,
            LoginEntity])
    ],
    controllers: [
        AppController,
        AutorizacionController,
        UsuarioController],
    providers: [
        AppService,
        UsuarioService
    ],
})

export class AppModule {
}

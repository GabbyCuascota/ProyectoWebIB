import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EquipoController} from "./Equipo/equipo.controller";
import {JugadorController} from "./Jugador/jugador.controller";
import {EquipoService} from "./Equipo/equipo.service";
import {AutorizacionController} from "./autorizacion.controller";
import {JugadorService} from "./Jugador/jugador.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./Usuario/usuario.entity";
import {EquipoEntity} from "./Equipo/equipo.entity";
import {JugadorEntity} from "./Jugador/jugador.entity";
import {UsuarioController} from "./Usuario/usuario.controller";
import {UsuarioService} from "./Usuario/usuario.service";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '',
          database: 'baseprueba',
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
          //ssl: true,
      }),
      TypeOrmModule.forFeature([EquipoEntity,JugadorEntity,UsuarioEntity])
  ],
  controllers: [
      AppController,
      EquipoController,
      JugadorController,
      AutorizacionController,
      UsuarioController],
  providers: [
      AppService,
      EquipoService,
      JugadorService,
      UsuarioService
     ],
})

export class AppModule {}

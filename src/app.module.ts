import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Usuario } from './usuarios/entities/usuario.entity';
import { JuegosModule } from './juegos/juegos.module';
import { Juego } from './juegos/entities/juego.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Digicone444',
      database: 'battlenet',
      entities: [Usuario, Juego],
    }),
    UsuariosModule,
    JuegosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

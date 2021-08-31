import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Usuario } from './usuarios/entities/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Pedrula123',
      database: 'battlenet',
      entities: [Usuario],
    }),
    UsuariosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

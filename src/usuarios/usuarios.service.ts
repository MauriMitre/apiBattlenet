import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDescuentoDto } from './dto/create-descuento.dto';
import { CreateJuegoDto } from './dto/create-juego.dto';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { CreateNotificacionDto } from './dto/create_notificacion.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usersRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    try{
      let querySql = `CALL insert_usuario('${createUsuarioDto.pass}', '${createUsuarioDto.nombreusuario}','${createUsuarioDto.fechacreacion}','${createUsuarioDto.mail}',${createUsuarioDto.rol})`
      return (await this.usersRepository.query(querySql))[0][0];
    } 
    catch(e){
      return -1;
    }
  }

  async createJuego(createJuegoDto: CreateJuegoDto) {
    try{
      let querySql = `CALL insert_juego('${createJuegoDto.nombre}', '${createJuegoDto.descripcion}',${createJuegoDto.like},${createJuegoDto.dislike},${createJuegoDto.creadorid},${createJuegoDto.precio})`
      return (await this.usersRepository.query(querySql))[0][0];
    } 
    catch(e){
      return -1;
    }
  }

  async createDescuento(createDescuentoDto: CreateDescuentoDto) {
    try{
      let querySql = `CALL insert_descuento(${createDescuentoDto.juego_id},${createDescuentoDto.notificacion_id},,${createDescuentoDto.coeficiente})`
      return (await this.usersRepository.query(querySql))[0][0];
    } 
    catch(e){
      return -1;
    }
  }

  async createNotificacion(createNotificacionDto: CreateNotificacionDto) {
    try{
      let querySql = `CALL insert_notificacion('${createNotificacionDto.mensaje}','${createNotificacionDto.fecha_publicacion}')`
      return (await this.usersRepository.query(querySql))[0][0];
    } 
    catch(e){
      return -1;
    }
  }

  async findAll() {
    return  (await this.usersRepository.query('CALL `battlenet`.`get_usuarios`()'))[0]
    //return `This action returns all usuarios`;
  }

  async findOne(id: number) {
    return (await this.usersRepository.query('CALL `battlenet`.`get_usuario`()'))[0]
  }

  async findAllJuegos() {
    return  (await this.usersRepository.query('CALL `battlenet`.`get_juegos`()'))[0]
    //return `This action returns all juegos`;
  }
  
/*
  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }*/

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
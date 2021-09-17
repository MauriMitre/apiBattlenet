import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDescuentoDto } from './dto/create-descuento.dto';
import { CreateJuegoDto } from './dto/create-juego.dto';
import { CreatePuntuacionDto } from './dto/create-puntuacion.dto';
import { Juego } from './entities/juego.entity';

@Injectable()
export class JuegosService {
  constructor(
    @InjectRepository(Juego)
    private usersRepository: Repository<Juego>,
  ) {}

  async puntuar(createPuntuacionDto: CreatePuntuacionDto) {
    try{
      console.log(createPuntuacionDto.fechahora)
      let querySql = `CALL insert_puntuacion(${createPuntuacionDto.juego_id},${createPuntuacionDto.usuario_id},'${createPuntuacionDto.fechahora}',${createPuntuacionDto.liketype})`
      return (await this.usersRepository.query(querySql));
    } 
    catch(e){
      throw new Error(e)
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

  async findAll() { 
      return  (await this.usersRepository.query('CALL `battlenet`.`get_juegos`()'))
      //return `This action returns all juegos`; 
  }

  async findOne(id: number) {
    return  (await this.usersRepository.query('CALL `battlenet`.`get_juegos`()'))[0]
  }


  remove(id: number) {
    return `This action removes a #${id} juego`;
  }
}

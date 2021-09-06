import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
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

  async findAll() {
    return  (await this.usersRepository.query('CALL `battlenet`.`get_usuarios`()'))[0]
    //return `This action returns all usuarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }
/*
  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }*/

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
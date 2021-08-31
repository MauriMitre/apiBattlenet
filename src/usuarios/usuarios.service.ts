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

  create(createUsuarioDto: CreateUsuarioDto) {
    return 'This action adds a new usuario';
  }

  findAll() {
    return this.usersRepository.query('CALL `battlenet`.`get_usuarios`()')
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

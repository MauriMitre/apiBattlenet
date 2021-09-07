import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JuegosService } from './juegos.service';
import { CreateJuegoDto } from './dto/create-juego.dto';
import { CreatePuntuacionDto } from './dto/create-puntuacion.dto';

@Controller('juegos')
export class JuegosController {
  constructor(private readonly juegosService: JuegosService) {}

  @Post()
  create(@Body() createJuegoDto: CreateJuegoDto) {
    console.log("cvv")
    return this.juegosService.create(createJuegoDto);
  }

  @Post('/puntuar')
  puntuar(@Body() createPuntuacionDto: CreatePuntuacionDto) {

    console.log("entra", JSON.stringify(createPuntuacionDto));
    return this.juegosService.puntuar(createPuntuacionDto);
  }

  @Get()
  findAll() {
    return "get de juegos";
  }

  @Get('/puntuar')
  findOne(@Param('id') id: string) {
    return "puntuar";
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.juegosService.remove(+id);
  }
}

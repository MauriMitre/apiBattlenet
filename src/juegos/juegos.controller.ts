import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JuegosService } from './juegos.service';
import { CreateJuegoDto } from './dto/create-juego.dto';
import { CreatePuntuacionDto } from './dto/create-puntuacion.dto';
import { CreateDescuentoDto } from './dto/create-descuento.dto';

@Controller('juegos')
export class JuegosController {
  constructor(private readonly juegosService: JuegosService) {}

  @Post('/juego')
  create(@Body() createJuegoDto: CreateJuegoDto) {
    console.log("cvv")
    return this.juegosService.createJuego(createJuegoDto);
  }

  @Post('/puntuar')
  puntuar(@Body() createPuntuacionDto: CreatePuntuacionDto) {

    console.log("entra", JSON.stringify(createPuntuacionDto));
    return this.juegosService.puntuar(createPuntuacionDto);
  }
  
  @Post('/descuento')
  createDescuento(@Body() createDescuentoDto: CreateDescuentoDto) {
    return this.juegosService.createDescuento(createDescuentoDto);
  }

  @Get()
  findAll() {
    return this.juegosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.juegosService.findOne(+id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.juegosService.remove(+id);
  }
}

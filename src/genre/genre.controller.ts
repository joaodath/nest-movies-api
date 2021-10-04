import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { Genre, Prisma } from '.prisma/client';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get('/list')
  @UsePipes(ValidationPipe)
  async findAll(): Promise<Genre[]> {
    return await this.genreService.findAll();
  }

  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Genre> {
    return await this.genreService.findOne(id);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() createGenreDto: CreateGenreDto): Promise<Genre> {
    return await this.genreService.create(createGenreDto);
  }

  @Patch('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGenreDto: UpdateGenreDto,
  ) {
    return await this.genreService.update(id, updateGenreDto);
  }

  @Delete('/delete')
  @UsePipes(ValidationPipe)
  async removeAll() {
    return await this.genreService.removeAll();
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<Genre> {
    return await this.genreService.remove(id);
  }
}

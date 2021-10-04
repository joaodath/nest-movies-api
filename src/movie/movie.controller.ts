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
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie, Prisma } from '.prisma/client';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('/list')
  @UsePipes(ValidationPipe)
  async findAll(): Promise<Movie[]> {
    return await this.movieService.findAll();
  }

  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Movie> {
    return await this.movieService.findOne(id);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() createMovieDto: CreateMovieDto): Promise<Movie> {
    return await this.movieService.create(createMovieDto);
  }

  @Patch('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMovieDto: UpdateMovieDto,
  ): Promise<Movie> {
    return await this.movieService.update(id, updateMovieDto);
  }

  @Delete('/delete')
  @UsePipes(ValidationPipe)
  async removeAll() {
    return await this.movieService.removeAll();
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<Movie> {
    return await this.movieService.remove(id);
  }
}

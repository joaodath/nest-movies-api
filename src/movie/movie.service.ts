import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Movie, Prisma } from '.prisma/client';

@Injectable()
export class MovieService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.MovieCreateInput) {
    return this.prisma.movie.create({
      data: data,
    });
  }

  async findAll(): Promise<Movie[]> {
    return await this.prisma.movie.findMany();
  }

  async findOne(id: number): Promise<Movie> {
    return await this.prisma.movie.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, data: CreateMovieDto): Promise<Movie> {
    return await this.prisma.movie.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async remove(id: number) {
    return await this.prisma.movie.delete({
      where: {
        id: id,
      },
    });
  }

  async deleteAll() {
    return await this.prisma.movie.deleteMany({});
  }
}

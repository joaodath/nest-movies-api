import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

import { Prisma, Genre } from '.prisma/client';

@Injectable()
export class GenreService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Genre[]> {
    return await this.prisma.genre.findMany();
  }

  async findOne(id: number): Promise<Genre> {
    return await this.prisma.genre.findUnique({
      where: {
        id: id,
      },
    });
  }

  async create(data: Prisma.GenreCreateInput): Promise<Genre> {
    return await this.prisma.genre.create({ data });
  }

  async update(id: number, data: Prisma.GenreCreateInput): Promise<Genre> {
    return await this.prisma.genre.update({
      where: { id: id },
      data: data,
    });
  }

  async remove(id: number) {
    return await this.prisma.genre.delete({
      where: { id: id },
    });
  }

  async removeAll() {
    return await this.prisma.genre.deleteMany({});
  }
}

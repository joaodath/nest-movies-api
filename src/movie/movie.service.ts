import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Movie, Prisma } from '.prisma/client';
import { AddStaffAndGenreDto } from './dto/create-movie.dto';

@Injectable()
export class MovieService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.MovieCreateInput): Promise<Movie> {
    return await this.prisma.movie.create({
      data: data,
    });
  }

  async findAll(): Promise<Movie[]> {
    return await this.prisma.movie.findMany({
      include: {
        staff: {
          select: {
            name: true,
            img: true,
            birth: true,
            staff: true,
          },
        },
        genre: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async findOne(id: number): Promise<Movie> {
    return await this.prisma.movie.findUnique({
      where: {
        id: id,
      },
      include: {
        staff: {
          select: {
            name: true,
            img: true,
            birth: true,
            staff: true,
          },
        },
        genre: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async update(id: number, data: Prisma.MovieUpdateInput): Promise<Movie> {
    return await this.prisma.movie.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async remove(id: number): Promise<Movie> {
    return await this.prisma.movie.delete({
      where: {
        id: id,
      },
    });
  }

  async removeAll() {
    return await this.prisma.movie.deleteMany({});
  }

  async addInfo(data: AddStaffAndGenreDto) {
    if (data.genreId && data.staffId) {
      await this.prisma.movie.update({
        where: {
          id: data.movieId,
        },
        data: {
          genre: {
            connect: data.genreId,
          },
          staff: {
            connect: data.staffId,
          },
        },
      });
      return await this.findOne(data.movieId);
    } else if (data.genreId && !data.staffId) {
      await this.prisma.movie.update({
        where: {
          id: data.movieId,
        },
        data: {
          genre: {
            connect: data.genreId,
          },
        },
      });
      return await this.findOne(data.movieId);
    } else if (!data.genreId && data.staffId) {
      await this.prisma.movie.update({
        where: {
          id: data.movieId,
        },
        data: {
          staff: {
            connect: data.staffId,
          },
        },
      });
      return await this.findOne(data.movieId);
    } else if (!data.genreId && !data.staffId) {
      return {
        error: 'No data to update',
      };
    }
  }
}

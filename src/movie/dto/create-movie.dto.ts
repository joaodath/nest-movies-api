import { Prisma } from '.prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  img: string;

  @IsNotEmpty()
  release_date: string;

  @IsNotEmpty()
  duration: number;

  @IsOptional()
  genre: Prisma.GenreCreateNestedManyWithoutMovieInput;

  @IsOptional()
  staff: Prisma.StaffCreateNestedManyWithoutMovieInput;
}

export class AddStaffAndGenreDto {
  @IsOptional()
  genreId: [];

  @IsOptional()
  staffId: [];

  @IsNotEmpty()
  movieId: number;
}

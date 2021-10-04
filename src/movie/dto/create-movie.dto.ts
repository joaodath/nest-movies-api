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
}

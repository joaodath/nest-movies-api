import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateStaffDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  img: string;

  @IsNotEmpty()
  birth: string;

  @IsNotEmpty()
  staff: string;

  @IsOptional()
  movieId: number;
}

import { Prisma } from '.prisma/client';
export declare class CreateMovieDto {
    name: string;
    img: string;
    release_date: string;
    duration: number;
    genre: Prisma.GenreCreateNestedManyWithoutMovieInput;
    staff: Prisma.StaffCreateNestedManyWithoutMovieInput;
}
export declare class AddStaffAndGenreDto {
    genreId: [];
    staffId: [];
    movieId: number;
}

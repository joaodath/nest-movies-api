import { MovieService } from './movie.service';
import { CreateMovieDto, AddStaffAndGenreDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie, Prisma } from '.prisma/client';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    findAll(): Promise<Movie[]>;
    findOne(id: number): Promise<Movie>;
    create(createMovieDto: CreateMovieDto): Promise<Movie>;
    update(id: number, updateMovieDto: UpdateMovieDto): Promise<Movie>;
    addInfo(data: AddStaffAndGenreDto): Promise<Movie | {
        error: string;
    }>;
    removeAll(): Promise<Prisma.BatchPayload>;
    remove(id: number): Promise<Movie>;
}

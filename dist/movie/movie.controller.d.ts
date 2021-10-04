import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie, Prisma } from '.prisma/client';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    findAll(): Promise<Movie[]>;
    findOne(id: number): Promise<Movie>;
    create(createMovieDto: CreateMovieDto): Promise<Movie>;
    update(id: number, updateMovieDto: UpdateMovieDto): Promise<Movie>;
    removeAll(): Promise<Prisma.BatchPayload>;
    remove(id: number): Promise<Movie>;
}

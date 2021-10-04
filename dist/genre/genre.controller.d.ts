import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { Genre, Prisma } from '.prisma/client';
export declare class GenreController {
    private readonly genreService;
    constructor(genreService: GenreService);
    findAll(): Promise<Genre[]>;
    findOne(id: number): Promise<Genre>;
    create(createGenreDto: CreateGenreDto): Promise<Genre>;
    update(id: number, updateGenreDto: CreateGenreDto): Promise<Genre>;
    removeAll(): Promise<Prisma.BatchPayload>;
    remove(id: number): Promise<Genre>;
}

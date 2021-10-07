import { PrismaService } from 'src/prisma/prisma.service';
import { Movie, Prisma } from '.prisma/client';
import { AddStaffAndGenreDto } from './dto/create-movie.dto';
export declare class MovieService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.MovieCreateInput): Promise<Movie>;
    findAll(): Promise<Movie[]>;
    findOne(id: number): Promise<Movie>;
    update(id: number, data: Prisma.MovieUpdateInput): Promise<Movie>;
    remove(id: number): Promise<Movie>;
    removeAll(): Promise<Prisma.BatchPayload>;
    addInfo(data: AddStaffAndGenreDto): Promise<Movie | {
        error: string;
    }>;
}

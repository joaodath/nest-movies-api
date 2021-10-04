import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Genre } from '.prisma/client';
export declare class GenreService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Genre[]>;
    findOne(id: number): Promise<Genre>;
    create(data: Prisma.GenreCreateInput): Promise<Genre>;
    update(id: number, data: Prisma.GenreCreateInput): Promise<Genre>;
    remove(id: number): Promise<Genre>;
    removeAll(): Promise<Prisma.BatchPayload>;
}

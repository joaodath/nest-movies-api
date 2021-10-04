import { PrismaService } from 'src/prisma/prisma.service';
import { Staff, Prisma } from '.prisma/client';
export declare class StaffService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Staff[]>;
    findOne(id: number): Promise<Staff>;
    create(data: Prisma.StaffCreateInput): Promise<Staff>;
    update(id: number, data: Prisma.StaffCreateInput): Promise<Staff>;
    remove(id: number): Promise<Staff>;
    removeAll(): Promise<Prisma.BatchPayload>;
}

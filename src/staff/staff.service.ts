import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { Staff, Prisma } from '.prisma/client';

@Injectable()
export class StaffService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Staff[]> {
    return await this.prisma.staff.findMany();
  }

  async findOne(id: number): Promise<Staff> {
    return await this.prisma.staff.findUnique({
      where: {
        id: id,
      },
    });
  }

  async create(data: Prisma.StaffCreateInput): Promise<Staff> {
    return await this.prisma.staff.create({ data });
  }

  async update(id: number, data: Prisma.StaffCreateInput): Promise<Staff> {
    return await this.prisma.staff.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async remove(id: number) {
    return await this.prisma.staff.delete({
      where: {
        id: id,
      },
    });
  }

  async removeAll() {
    return await this.prisma.staff.deleteMany({});
  }
}

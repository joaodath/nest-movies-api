import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { StaffService } from './staff.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { Staff, Prisma } from '.prisma/client';

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Get('/list')
  @UsePipes(ValidationPipe)
  async findAll(): Promise<Staff[]> {
    return await this.staffService.findAll();
  }

  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Staff> {
    return await this.staffService.findOne(id);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() createStaffDto: CreateStaffDto): Promise<Staff> {
    return await this.staffService.create(createStaffDto);
  }

  @Patch('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStaffDto: UpdateStaffDto,
  ): Promise<Staff> {
    return await this.staffService.update(id, updateStaffDto);
  }

  @Delete('/delete')
  @UsePipes(ValidationPipe)
  async removeAll() {
    return await this.staffService.removeAll();
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<Staff> {
    return await this.staffService.remove(id);
  }
}

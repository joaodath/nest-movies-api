import { StaffService } from './staff.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { Staff, Prisma } from '.prisma/client';
export declare class StaffController {
    private readonly staffService;
    constructor(staffService: StaffService);
    findAll(): Promise<Staff[]>;
    findOne(id: number): Promise<Staff>;
    create(createStaffDto: CreateStaffDto): Promise<Staff>;
    update(id: number, updateStaffDto: UpdateStaffDto): Promise<Staff>;
    removeAll(): Promise<Prisma.BatchPayload>;
    remove(id: number): Promise<Staff>;
}

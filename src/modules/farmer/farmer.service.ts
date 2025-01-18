import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateFarmerDto } from './dto/create-farmer.dto';
import { UpdateFarmerDto } from './dto/update-farmer.dto';

@Injectable()
export class FarmerService {
    constructor(private prisma: PrismaService) {}

    async create(createFarmerDto: CreateFarmerDto) {
        return this.prisma.farmer.create({
            data: createFarmerDto,
        });
    }

    async findAll() {
        return this.prisma.farmer.findMany({
            include: {properties: true},
        });
    }

    async findOne(id: string) {
        return this.prisma.farmer.findUnique({
            where: {id},
            include: {properties: true},
        });
    }

    async update(id: string, updateFarmerDto: UpdateFarmerDto) {
        return  this.prisma.farmer.update({
            where: { id },
            data: updateFarmerDto,
        });
    }

    async remove(id: string) {
        return  this.prisma.farmer.delete({
            where: { id },
        });
    }
}
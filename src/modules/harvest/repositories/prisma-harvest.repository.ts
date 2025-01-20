import { CreateHaverstDto } from "../dto/create-haverst.dto";

import { UpdateHarvestDto } from "../dto/update-harvest.dto";
import { Harvest } from "../entities/harverst.entity";
import {IHarvestRepository} from "./contracts/iharvest-repository";
import {PrismaService} from "../../../database/prisma/prisma.service";
import {Injectable} from "@nestjs/common";

@Injectable()
export class PrismaHarvestRepository implements IHarvestRepository {

    constructor(private prisma: PrismaService) {
    }

    async create(data: CreateHaverstDto): Promise<Harvest> {
        return this.prisma.harvest.create({
            data: {
                year: data.year,
                farmId: data.farmId,
            }
        })
    }
    async listAll(): Promise<Harvest[]> {
        return this.prisma.harvest.findMany();
    }
    async getById(id: string): Promise<Harvest> {
        return this.prisma.harvest.findUniqueOrThrow({
            where: {
                id
            },
            include: {
                crops: true,
            }
        })
    }
    async delete(id: string): Promise<void> {
        await this.prisma.harvest.delete({
            where: {
                id
            }
        });
    }
    async update(id: string, data: UpdateHarvestDto): Promise<Harvest> {
        return this.prisma.harvest.update({
            where: {
                id
            },
            data: data
        })
    }
}
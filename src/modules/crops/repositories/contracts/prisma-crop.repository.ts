import {Injectable} from "@nestjs/common";
import {ICropRepository} from "./icrop-repository";
import { Crop } from "@prisma/client";
import { UpdateHarvestDto } from "src/modules/harvest/dto/update-harvest.dto";
import {PrismaService} from "../../../../database/prisma/prisma.service";


@Injectable()
export class PrismaCropRepository implements ICropRepository {

    constructor(private prisma: PrismaService) {
    }

    async create(data: Crop): Promise<Crop> {
        return this.prisma.crop.create({
            data
        });
    }

    async listAll(): Promise<Crop[]> {
        return this.prisma.crop.findMany();
    }

   async getById(id: string): Promise<Crop> {
        return this.prisma.crop.findUniqueOrThrow({
            where: {
                id
            }
        });
    }
    async delete(id: string): Promise<void> {
         this.prisma.crop.delete({
            where:{
                id
            }
        })
    }
    async update(id: string, data: UpdateHarvestDto): Promise<Crop> {
        return this.prisma.crop.update({
            where: {
                id
            },
            data: data
        })
    }

}
import { CreateFarmDto } from "../dto/create-farm.dto";
import { Farm } from "../entities/farm.entity";
import {IFarmRepository} from "./contract/ifarm-repository";
import {PrismaService} from "../../../database/prisma/prisma.service";
import {Injectable} from "@nestjs/common";

@Injectable()
export class PrismaFarmRepository implements IFarmRepository {

    constructor(private prisma: PrismaService) {}

    async getById(id: string): Promise<Partial<Farm>> {
        return this.prisma.farm.findUnique({
            where: {
                id
            },
            include:{
                crops: true,
                harvests: true
            }
        })
    }

    async listAll(): Promise<Partial<Farm>[]> {
        return this.prisma.farm.findMany();
    }

    async create(farm: CreateFarmDto): Promise<Farm> {
        try {
            const createdFarm = await this.prisma.farm.create({data: farm});
            return new Farm(createdFarm);
        }catch (e) {
            console.log(e)
        }
    }

}
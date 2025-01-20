import {Injectable} from "@nestjs/common";
import {IFarmerRepository} from "./contract/ifarmer-repository";
import { CreateFarmerDto } from "../dto/create-farmer.dto";
import {PrismaService} from "../../../database/prisma/prisma.service";
import { Farmer } from "../entities/farmer.entity";
import { UpdateFarmerDto } from "../dto/update-farmer.dto";

@Injectable()
export class PrismaFarmerRepository implements IFarmerRepository {

    constructor(private prisma: PrismaService) {
    }

    async update(id: string, data: UpdateFarmerDto): Promise<Farmer> {
        return this.prisma.farmer.update({
            where: {
                id
            },
            data: data
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.farmer.delete({
            where: {
                id
            }
        })
    }

    async getById(id: string): Promise<Farmer> {
        try {
             return await this.prisma.farmer.findUniqueOrThrow(
                {
                    where: {
                        id
                    },
                    include: {
                        properties: true,
                    },
                })
        }catch (e) {
         throw e;
        }
    }

    create(data: CreateFarmerDto): Promise<Farmer> {
        return this.prisma.farmer.create({
            data
        })
    }

    async listAll(): Promise<Farmer[]> {
        return this.prisma.farmer.findMany();
    }

}
import {ICreateHarvestUseCase} from "../contracts/icreate-harvest.usecase";
import { CreateHaverstDto } from "../dto/create-haverst.dto";
import { Harvest } from "../entities/harverst.entity";
import {Inject, Injectable} from "@nestjs/common";
import {IHarvestRepository} from "../repositories/contracts/iharvest-repository";

@Injectable()
export class CreateHarvestUseCase implements ICreateHarvestUseCase {
    constructor(
        @Inject('IHarvestRepository')
        private harvestRepository: IHarvestRepository) {}

    async execute(data: CreateHaverstDto): Promise<Harvest> {
        const harvest = new Harvest(data)
        return await this.harvestRepository.create(harvest);
    }

}
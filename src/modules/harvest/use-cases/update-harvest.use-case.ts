import {IUpdateHarvestUseCase} from "../contracts/iupdate-harvest.usecase";
import { Harvest } from "../entities/harverst.entity";
import {Inject, Injectable} from "@nestjs/common";
import {IHarvestRepository} from "../repositories/contracts/iharvest-repository";
import {UpdateHarvestDto} from "../dto/update-harvest.dto";

@Injectable()
export class UpdateHarvestUseCase implements IUpdateHarvestUseCase {

    constructor(
        @Inject('IHarvestRepository')
        private harvestRepository: IHarvestRepository) {}

    async execute(id: string, data: Partial<UpdateHarvestDto>): Promise<Harvest> {
        return await this.harvestRepository.update(id,data)
    }
}
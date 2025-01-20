import {IGetHarvestUseCase} from "../contracts/iget-harvest.usecase";
import { Harvest } from "../entities/harverst.entity";
import {Inject, Injectable, NotFoundException} from "@nestjs/common";
import {IHarvestRepository} from "../repositories/contracts/iharvest-repository";
import {NotFoundError} from "rxjs";

@Injectable()
export class GetHarvestUseCase implements IGetHarvestUseCase {

    constructor(
        @Inject('IHarvestRepository')
        private harvestRepository: IHarvestRepository) {}

    async execute(id: string): Promise<Harvest> {
        try {
            return await this.harvestRepository.getById(id)
        }catch (e) {
            throw new NotFoundException(`Harvest with document ${id} not found`);
        }

    }
}
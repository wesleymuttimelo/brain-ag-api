import {IDeleteHarvestUseCase} from "../contracts/idelete-harvest.usecase";
import {Inject, Injectable} from "@nestjs/common";
import {IHarvestRepository} from "../repositories/contracts/iharvest-repository";

@Injectable()
export class DeleteHarvestUseCase implements IDeleteHarvestUseCase{
    constructor(
        @Inject('IHarvestRepository')
        private harvestRepository: IHarvestRepository) {}

    async execute(id: string): Promise<void> {
        return await this.harvestRepository.delete(id)
    }

}
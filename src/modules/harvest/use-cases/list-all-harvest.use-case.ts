import {IListAllHarvestUseCase} from "../contracts/ilist-all-harvest.usecase";
import {Harvest} from "@prisma/client";
import {Inject, Injectable} from "@nestjs/common";
import {IHarvestRepository} from "../repositories/contracts/iharvest-repository";

@Injectable()
export class ListAllHarvestUseCase implements IListAllHarvestUseCase{
    constructor(
        @Inject('IHarvestRepository')
        private harvestRepository: IHarvestRepository) {}

    async execute(): Promise<Harvest[]> {
        return this.harvestRepository.listAll()
    }
}
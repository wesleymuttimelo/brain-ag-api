import {IlistAllFarmUseCase} from "../contracts/ilist-all-farm.use-case";
import { Farm } from "../entities/farm.entity";
import {Inject, Injectable} from "@nestjs/common";
import {IFarmRepository} from "../repositories/contract/ifarm-repository";

@Injectable()
export class ListAllFarmUseCase implements IlistAllFarmUseCase {

    constructor(
        @Inject('IFarmRepository')
        private farmRepository: IFarmRepository) {}

    async execute(): Promise<Partial<Farm>[]> {
        return await this.farmRepository.listAll();
    }
}
import {IGetFarmUseCase} from "../contracts/iget-farm.use-case";
import { Farm } from "../entities/farm.entity";
import {Inject, Injectable} from "@nestjs/common";
import {IFarmRepository} from "../repositories/contract/ifarm-repository";

@Injectable()
export class GetFarmUseCase implements IGetFarmUseCase {

    constructor(
        @Inject('IFarmRepository')
        private farmRepository: IFarmRepository) {}

    async execute(id: string): Promise<Partial<Farm>>{
        return this.farmRepository.getById(id)
    }
}
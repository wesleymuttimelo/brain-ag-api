import {ICreateFarmUseCase} from "../contracts/icreate-farm.use-case";
import {CreateFarmDto} from "../dto/create-farm.dto";
import {Farm} from "../entities/farm.entity";
import {Inject, Injectable} from "@nestjs/common";
import {IFarmRepository} from "../repositories/contract/ifarm-repository";

@Injectable()
export class CreateFarmUseCase implements ICreateFarmUseCase{
    constructor(
        @Inject('IFarmRepository')
        private farmRepository: IFarmRepository) {}

    async execute(farmData:CreateFarmDto):Promise<Farm>{
        const farm = new Farm(farmData);
        return await this.farmRepository.create(farm)
    }
}
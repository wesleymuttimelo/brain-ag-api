import {ICreateFarmerUseCase} from "../contracts/icreate-farmer.use-case";
import {Farmer} from "../entities/farmer.entity";
import {CreateFarmerDto} from "../dto/create-farmer.dto";
import {Inject, Injectable} from "@nestjs/common";
import {IFarmerRepository} from "../repositories/contract/ifarmer-repository";

@Injectable()
export class CreateFarmerUseCase implements ICreateFarmerUseCase {
    constructor(
        @Inject('IFarmerRepository')
        private farmerRepository: IFarmerRepository) {}

    execute(farmerData: CreateFarmerDto): Promise<Farmer> {
       return this.farmerRepository.create(farmerData);
    }
}
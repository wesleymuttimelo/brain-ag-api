import { Farmer } from "@prisma/client";
import {IGetFarmerUseCase} from "../contracts/iget-farmer.use-case";
import {Inject, Injectable, NotFoundException} from "@nestjs/common";
import {IFarmerRepository} from "../repositories/contract/ifarmer-repository";

@Injectable()
export class GetFarmerUseCase implements IGetFarmerUseCase {

    constructor(
        @Inject('IFarmerRepository')
        private farmerRepository: IFarmerRepository) {}

    async execute(id:string): Promise<Farmer> {
        try {
            return await this.farmerRepository.getById(id)
        }catch (e) {
            throw new NotFoundException(`Farmer with document ${id} not found`);
        }

    }
}
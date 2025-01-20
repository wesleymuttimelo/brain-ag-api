import {IUpdateFarmerUseCase} from "../contracts/iupdate-farmer.use-case";
import { UpdateFarmerDto } from "../dto/update-farmer.dto";
import {Inject, NotFoundException} from "@nestjs/common";
import {IFarmerRepository} from "../repositories/contract/ifarmer-repository";
import {Farmer} from "../entities/farmer.entity";

export class UpdateFarmerUseCase implements IUpdateFarmerUseCase {

    constructor(
        @Inject('IFarmerRepository')
        private farmerRepository: IFarmerRepository) {}

    async execute(id: string, data: UpdateFarmerDto): Promise<Farmer> {
        const farmer = await this.farmerRepository.getById(id);
        if (!farmer) {
            throw new NotFoundException(`Farmer with document ${id} not found`);
        }
        return await this.farmerRepository.update(id, data);
    }
}
import {Inject, Injectable} from "@nestjs/common";
import {IDeleteFarmerUseCase} from "../contracts/idelete-farmer.use-case";
import {IFarmerRepository} from "../repositories/contract/ifarmer-repository";

@Injectable()
export class DeleteFarmerUseCase implements IDeleteFarmerUseCase {
    constructor(
        @Inject('IFarmerRepository')
        private farmerRepository: IFarmerRepository) {}

    async execute(id: string): Promise<void> {
        return await this.farmerRepository.delete(id);
    }

}
import {Inject, Injectable} from "@nestjs/common";
import {IListAllFarmerUseCase} from "../contracts/ilist-all-farmer.use-case";
import { Farmer } from "@prisma/client";
import {IFarmerRepository} from "../repositories/contract/ifarmer-repository";


@Injectable()
export class ListAllFarmerUseCase implements IListAllFarmerUseCase {
    constructor(
        @Inject('IFarmerRepository')
        private farmerRepository: IFarmerRepository) {}

    async execute(): Promise<Farmer[]> {
        return this.farmerRepository.listAll();
    }
}
import {CreateFarmerDto} from "../dto/create-farmer.dto";
import {Farmer} from "../entities/farmer.entity";

export interface ICreateFarmerUseCase {
    execute(farmer: CreateFarmerDto): Promise<Farmer>;
}
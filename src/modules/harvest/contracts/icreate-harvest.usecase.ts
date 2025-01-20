import {CreateHaverstDto} from "../dto/create-haverst.dto";
import {Harvest} from "../entities/harverst.entity";

export interface ICreateHarvestUseCase {
    execute(data: CreateHaverstDto): Promise<Harvest>;
}
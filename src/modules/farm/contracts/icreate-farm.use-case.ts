import {CreateFarmDto} from "../dto/create-farm.dto";
import {Farm} from "../entities/farm.entity";

export interface ICreateFarmUseCase {
  execute(farmData:CreateFarmDto): Promise<Farm>;
}
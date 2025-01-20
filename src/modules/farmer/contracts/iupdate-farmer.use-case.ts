import {UpdateFarmerDto} from "../dto/update-farmer.dto";
import {Farmer} from "../entities/farmer.entity";

export interface IUpdateFarmerUseCase {
  execute(id: string, data: UpdateFarmerDto): Promise<Farmer>;
}
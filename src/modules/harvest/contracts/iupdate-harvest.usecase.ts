import {Harvest} from "../entities/harverst.entity";
import {UpdateHarvestDto} from "../dto/update-harvest.dto";

export interface IUpdateHarvestUseCase {
    execute(id: string, data: Partial<UpdateHarvestDto>): Promise<Harvest>;
}
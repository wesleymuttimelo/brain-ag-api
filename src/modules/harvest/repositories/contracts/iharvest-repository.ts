import {CreateHaverstDto} from "../../dto/create-haverst.dto";
import {Harvest} from "../../entities/harverst.entity";
import {UpdateHarvestDto} from "../../dto/update-harvest.dto";


export interface IHarvestRepository {
    create(data: Harvest): Promise<Harvest>;
    listAll(): Promise<Harvest[]>;
    getById(id: string): Promise<Harvest>;
    delete(id: string): Promise<void>;
    update(id: string, data: UpdateHarvestDto): Promise<Harvest>;
}
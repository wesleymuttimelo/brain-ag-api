import {UpdateHarvestDto} from "../../../harvest/dto/update-harvest.dto";
import {Crop} from "../../entities/crop.entity";

export interface ICropRepository {
    create(data: Crop): Promise<Crop>;
    listAll(): Promise<Crop[]>;
    getById(id: string): Promise<Crop>;
    delete(id: string): Promise<void>;
    update(id: string, data: UpdateHarvestDto): Promise<Crop>;
}
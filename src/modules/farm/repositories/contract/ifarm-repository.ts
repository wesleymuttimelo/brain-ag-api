import {Farm} from "../../entities/farm.entity";
import {CreateFarmDto} from "../../dto/create-farm.dto";

export interface IFarmRepository {
    create(farm: CreateFarmDto):Promise<Farm>
    listAll():Promise<Partial<Farm>[]>
    getById(id: string):Promise<Partial<Farm>>
}
import {Farm} from "../entities/farm.entity";

export interface IGetFarmUseCase {
    execute(id: string): Promise<Partial<Farm>>;
}
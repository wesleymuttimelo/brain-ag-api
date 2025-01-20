import {Farm} from "../entities/farm.entity";

export interface IlistAllFarmUseCase {
    execute(): Promise<Partial<Farm>[]>
}
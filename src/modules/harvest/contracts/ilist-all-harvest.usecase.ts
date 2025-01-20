import {Harvest} from "@prisma/client";

export interface IListAllHarvestUseCase {
    execute(): Promise<Harvest[]>;
}
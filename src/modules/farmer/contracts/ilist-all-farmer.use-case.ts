import {Farmer} from "@prisma/client";

export interface IListAllFarmerUseCase {
    execute(): Promise<Farmer[]>;
}
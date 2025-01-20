import {Farmer} from "@prisma/client";

export interface IGetFarmerUseCase {
    execute(id:string): Promise<Farmer>;
}
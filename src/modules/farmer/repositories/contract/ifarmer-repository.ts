import {CreateFarmerDto} from "../../dto/create-farmer.dto";
import {Farmer} from "@prisma/client";
import {UpdateFarmerDto} from "../../dto/update-farmer.dto";

export interface IFarmerRepository {
    create(data: CreateFarmerDto): Promise<Farmer>;
    listAll(): Promise<Farmer[]>;
    getById(id: string): Promise<Farmer>;
    delete(id: string): Promise<void>;
    update(id: string, data: UpdateFarmerDto): Promise<Farmer>;
}
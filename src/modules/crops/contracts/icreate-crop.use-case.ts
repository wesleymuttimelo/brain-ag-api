import {CreateCropDto} from "../dto/create-crop.dto";
import {Crop} from "../entities/crop.entity";

export interface ICreateCropUseCase {
    execute(data: CreateCropDto): Promise<Crop>;
}
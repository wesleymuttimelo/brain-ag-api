import {UpdateCropDto} from "../dto/update-crop.dto";
import {Crop} from "../entities/crop.entity";


export interface IUpdateCropUseCase {
    execute(id: string, data: UpdateCropDto): Promise<Crop>;
}
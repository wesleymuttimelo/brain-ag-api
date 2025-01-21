import {IUpdateCropUseCase} from "../contracts/iupdate-crop.use-case";
import { UpdateCropDto } from "../dto/update-crop.dto";
import {Inject, Injectable} from "@nestjs/common";
import {ICropRepository} from "../repositories/contracts/icrop-repository";
import {Crop} from "../entities/crop.entity";

@Injectable()
export class UpdateCropUseCase implements IUpdateCropUseCase {

    constructor(
        @Inject('ICropRepository')
        private cropRepository: ICropRepository) {}

    async execute(id: string, data: UpdateCropDto): Promise<Crop> {
        return this.cropRepository.update(id,data)
    }
}
import {ICreateCropUseCase} from "../contracts/icreate-crop.use-case";
import {CreateCropDto} from "../dto/create-crop.dto";
import {Inject, Injectable} from "@nestjs/common";
import {ICropRepository} from "../repositories/contracts/icrop-repository";
import {Crop} from "../entities/crop.entity";

@Injectable()
export class CreateCropUseCase implements ICreateCropUseCase {

    constructor(
        @Inject('ICropRepository')
        private cropRepository: ICropRepository) {}

    async execute(data: CreateCropDto): Promise<Crop> {
        const crop = new Crop(data)
        return this.cropRepository.create(crop)
    }
}
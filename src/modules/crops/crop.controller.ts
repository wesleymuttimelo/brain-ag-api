import {Body, Controller, Inject, Param, Patch, Post} from "@nestjs/common";
import {CreateCropUseCase} from "./use-cases/create-crop.usecase";
import {CreateCropDto} from "./dto/create-crop.dto";
import {UpdateCropUseCase} from "./use-cases/update-crop.use-case";
import {UpdateCropDto} from "./dto/update-crop.dto";


@Controller('crops')
export class CropController {
    @Inject(CreateCropUseCase)
    private readonly createCropUseCase:CreateCropUseCase

    @Inject(UpdateCropUseCase)
    private readonly updateCropUseCase:UpdateCropUseCase

    @Post()
    async createCrop(@Body() body: CreateCropDto) {
        return await this.createCropUseCase.execute(body)
    }

    @Patch(':id')
    async patchCrop(@Param('id') id: string, @Body() body: UpdateCropDto) {
        return await this.updateCropUseCase.execute(id,body)
    }
}
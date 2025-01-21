import {Module} from "@nestjs/common";
import {PrismaModule} from "../../database/prisma/prisma.module";
import {CropController} from "./crop.controller";
import {CreateCropUseCase} from "./use-cases/create-crop.usecase";
import {UpdateCropUseCase} from "./use-cases/update-crop.use-case";
import {PrismaCropRepository} from "./repositories/contracts/prisma-crop.repository";

@Module({
    imports: [PrismaModule],
    controllers: [CropController],
    providers: [CreateCropUseCase,UpdateCropUseCase,
        {
            provide: 'ICropRepository',
            useClass: PrismaCropRepository,
        }],
    exports: [CreateCropUseCase,UpdateCropUseCase],
})

export class CropModule {}
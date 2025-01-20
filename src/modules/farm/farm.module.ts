import {Module} from "@nestjs/common";
import {PrismaModule} from "../../database/prisma/prisma.module";
import {FarmController} from "./farm.controller";
import {CreateFarmUseCase} from "./use-cases/create-farm.use-case";
import {PrismaFarmRepository} from "./repositories/prisma-farm-repository";
import {ListAllFarmUseCase} from "./use-cases/list-all-farm.use-case";
import {GetFarmUseCase} from "./use-cases/get-farm.use-case";


@Module({
    imports: [PrismaModule],
    controllers: [FarmController],
    providers: [CreateFarmUseCase,ListAllFarmUseCase,GetFarmUseCase,PrismaFarmRepository,
        {
            provide: 'IFarmRepository',
            useClass: PrismaFarmRepository,
        }],
    exports: [CreateFarmUseCase],
})

export class FarmModule {}
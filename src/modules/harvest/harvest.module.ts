import {Module} from "@nestjs/common";
import {PrismaModule} from "../../database/prisma/prisma.module";
import {FarmerService} from "../farmer/farmer.service";
import {HarvestController} from "./harvest.controller";
import {CreateHarvestUseCase} from "./use-cases/create-harvest.use-case";
import {PrismaHarvestRepository} from "./repositories/prisma-harvest.repository";
import {ListAllHarvestUseCase} from "./use-cases/list-all-harvest.use-case";
import {GetHarvestUseCase} from "./use-cases/get-harvest.use-case";
import {UpdateHarvestUseCase} from "./use-cases/update-harvest.use-case";
import {DeleteHarvestUseCase} from "./use-cases/delete-harvest.use-case";

@Module({
    imports: [PrismaModule],
    controllers: [HarvestController],
    providers: [FarmerService,
        CreateHarvestUseCase,
        ListAllHarvestUseCase,
        GetHarvestUseCase,
        UpdateHarvestUseCase,
        DeleteHarvestUseCase,
        PrismaHarvestRepository,{
            provide: 'IHarvestRepository',
            useClass: PrismaHarvestRepository,
        }],
    exports: [FarmerService,CreateHarvestUseCase],
})
export class HarvestModule {}
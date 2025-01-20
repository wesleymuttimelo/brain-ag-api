import { Module } from '@nestjs/common';
import { FarmerService } from './farmer.service';
import { FarmerController } from './farmer.controller';
import { PrismaModule } from '../../database/prisma/prisma.module'
import {CreateFarmerUseCase} from "./use-cases/create-farmer.use-case";
import {PrismaFarmerRepository} from "./repositories/prisma-farmer-repository";
import {ListAllFarmerUseCase} from "./use-cases/list-all-farmer.use-case";
import {GetFarmerUseCase} from "./use-cases/get-farmer.use-case";
import {DeleteFarmerUseCase} from "./use-cases/delete-farmer.use-case";
import {UpdateFarmerUseCase} from "./use-cases/update-farmer.use-case";

@Module({
    imports: [PrismaModule],
    controllers: [FarmerController],
    providers: [FarmerService,
                CreateFarmerUseCase,
                ListAllFarmerUseCase,
                GetFarmerUseCase,
                DeleteFarmerUseCase,
                UpdateFarmerUseCase,
                PrismaFarmerRepository,{
        provide: 'IFarmerRepository',
        useClass: PrismaFarmerRepository,
    }],
    exports: [FarmerService,CreateFarmerUseCase],
})
export class FarmerModule {}
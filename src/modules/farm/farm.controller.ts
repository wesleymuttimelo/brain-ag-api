import {Body, Controller, Get, Inject, Param, Post} from "@nestjs/common";
import {CreateFarmDto} from "./dto/create-farm.dto";
import {CreateFarmUseCase} from "./use-cases/create-farm.use-case";
import {ListAllFarmUseCase} from "./use-cases/list-all-farm.use-case";
import {GetFarmUseCase} from "./use-cases/get-farm.use-case";

@Controller('farm')
export class FarmController {
    @Inject(CreateFarmUseCase)
    private readonly createFarmUseCase:CreateFarmUseCase
    @Inject(ListAllFarmUseCase)
    private readonly listAllFarmUseCase:ListAllFarmUseCase
    @Inject(GetFarmUseCase)
    private readonly getFarmUseCase:GetFarmUseCase


    @Post()
    async createFarm(@Body() farmData:CreateFarmDto){
        return await this.createFarmUseCase.execute(farmData)
    }

    @Get()
    async findAll() {
        return await this.listAllFarmUseCase.execute()
    }

    @Get(':id')
    async findOne(@Param('id') id: string){
        return await this.getFarmUseCase.execute(id)
    }
}
import {Body, Controller, Delete, Get, Inject, Param, Patch, Post} from "@nestjs/common";
import {CreateHarvestUseCase} from "./use-cases/create-harvest.use-case";
import {CreateHaverstDto} from "./dto/create-haverst.dto";
import {ListAllHarvestUseCase} from "./use-cases/list-all-harvest.use-case";
import {GetHarvestUseCase} from "./use-cases/get-harvest.use-case";
import {UpdateHarvestDto} from "./dto/update-harvest.dto";
import {UpdateHarvestUseCase} from "./use-cases/update-harvest.use-case";
import {DeleteHarvestUseCase} from "./use-cases/delete-harvest.use-case";

@Controller('harvest')
export class HarvestController {

    @Inject(CreateHarvestUseCase)
    private readonly createHarvestUseCase:CreateHarvestUseCase;
    @Inject(ListAllHarvestUseCase)
    private readonly listAllHarvestUseCase:ListAllHarvestUseCase
    @Inject(GetHarvestUseCase)
    private readonly getHarvestUseCase:GetHarvestUseCase
    @Inject(UpdateHarvestUseCase)
    private readonly updateHarvestUseCase:UpdateHarvestUseCase
    @Inject(DeleteHarvestUseCase)
    private readonly deleteHarvestUseCase:DeleteHarvestUseCase

    @Post()
    async createHarvest(@Body() body:CreateHaverstDto){
        return await this.createHarvestUseCase.execute(body)
    }

    @Get()
    async findAll(){
        return await this.listAllHarvestUseCase.execute()
    }

    @Get(':id')
    async findOne(@Param('id') id: string){
        return await this.getHarvestUseCase.execute(id)
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() body:UpdateHarvestDto){
        return await this.updateHarvestUseCase.execute(id, body)
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return await this.deleteHarvestUseCase.execute(id)
    }
}
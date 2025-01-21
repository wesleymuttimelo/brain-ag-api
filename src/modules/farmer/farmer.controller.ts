import { Controller, Get, Post, Body, Param, Patch, Delete, Inject } from '@nestjs/common';
import {ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody} from '@nestjs/swagger';
import { CreateFarmerDto } from './dto/create-farmer.dto';
import { UpdateFarmerDto } from './dto/update-farmer.dto';
import { CreateFarmerUseCase } from './use-cases/create-farmer.use-case';
import { ListAllFarmerUseCase } from './use-cases/list-all-farmer.use-case';
import { GetFarmerUseCase } from './use-cases/get-farmer.use-case';
import { DeleteFarmerUseCase } from './use-cases/delete-farmer.use-case';
import { UpdateFarmerUseCase } from './use-cases/update-farmer.use-case';
import { Farmer } from './entities/farmer.entity';

@ApiTags('Farmers')
@Controller('farmers')
export class FarmerController {
    @Inject(CreateFarmerUseCase)
    private readonly createFarmerUseCase: CreateFarmerUseCase;
    @Inject(ListAllFarmerUseCase)
    private readonly listAllFarmerUseCase: ListAllFarmerUseCase;
    @Inject(GetFarmerUseCase)
    private readonly getFarmerUseCase: GetFarmerUseCase;
    @Inject(DeleteFarmerUseCase)
    private readonly deleteFarmerUseCase: DeleteFarmerUseCase;
    @Inject(UpdateFarmerUseCase)
    private readonly updateFarmerUseCase: UpdateFarmerUseCase;

    @Post()
    @ApiOperation({ summary: 'Criar um novo agricultor' })
    @ApiResponse({ status: 201, description: 'Agricultor criado com sucesso.', type: Farmer })
    @ApiResponse({ status: 400, description: 'Erro ao criar um agricultor.' })
    @ApiBody({
        description: 'Dados necessários para criar um agricultor',
        type: CreateFarmerDto,
    })
    async create(@Body() createFarmerDto: CreateFarmerDto) {
        return this.createFarmerUseCase.execute(createFarmerDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os agricultores' })
    @ApiResponse({ status: 200, description: 'Lista de agricultores retornada com sucesso.', type: [Farmer] })
    @ApiResponse({ status: 500, description: 'Erro ao listar os agricultores.' })
    async findAll() {
        return this.listAllFarmerUseCase.execute();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Buscar um agricultor pelo ID' })
    @ApiParam({ name: 'id', description: 'ID do agricultor' })
    @ApiResponse({ status: 200, description: 'Agricultor encontrado com sucesso.', type: Farmer })
    @ApiResponse({ status: 404, description: 'Agricultor não encontrado.' })
    async findOne(@Param('id') id: string) {
        return this.getFarmerUseCase.execute(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Atualizar informações de um agricultor' })
    @ApiParam({ name: 'id', description: 'ID do agricultor a ser atualizado' })
    @ApiResponse({ status: 200, description: 'Agricultor atualizado com sucesso.', type: Farmer })
    @ApiResponse({ status: 400, description: 'Erro ao atualizar o agricultor.' })
    @ApiBody({
        description: 'Dados quem podem ser atualizados',
        type: CreateFarmerDto,
    })
    async update(@Param('id') id: string, @Body() updateFarmerDto: UpdateFarmerDto) {
        return await this.updateFarmerUseCase.execute(id, updateFarmerDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Deletar um agricultor pelo ID' })
    @ApiParam({ name: 'id', description: 'ID do agricultor a ser deletado' })
    @ApiResponse({ status: 200, description: 'Agricultor deletado com sucesso.' })
    @ApiResponse({ status: 404, description: 'Agricultor não encontrado.' })
    async remove(@Param('id') id: string) {
        return this.deleteFarmerUseCase.execute(id);
    }
}
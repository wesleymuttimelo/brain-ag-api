import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { FarmerService } from './farmer.service';
import { CreateFarmerDto } from './dto/create-farmer.dto';
import { UpdateFarmerDto } from './dto/update-farmer.dto';

@Controller('farmers')
export class FarmerController {
    constructor(private readonly farmerService: FarmerService) {}

    @Post()
    async create(@Body() createFarmerDto: CreateFarmerDto) {
        return this.farmerService.create(createFarmerDto);
    }

    @Get()
    async findAll() {
        return this.farmerService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.farmerService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateFarmerDto: UpdateFarmerDto) {
        return this.farmerService.update(id, updateFarmerDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.farmerService.remove(id);
    }
}
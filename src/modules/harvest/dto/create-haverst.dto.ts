import {IsArray, IsInt, IsNotEmpty, IsOptional, IsString, IsUUID, Matches, ValidateNested} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";

export class CropDto {
    @ApiProperty({
        description: 'Identificador único da cultura (UUID)',
        example: 'f1f28f90-e45b-11ed-b5ea-0242ac120002',
    })
    @IsUUID()
    id: string;

    @ApiProperty({
        description: 'Nome da cultura plantada',
        example: 'Soja',
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: 'Identificador único da safra associada (UUID)',
        example: '123e4567-e89b-12d3-a456-426614174000',
    })
    @IsUUID()
    harvestId: string;

    @ApiProperty({
        description: 'Identificador único da fazenda associada (UUID)',
        example: '123e4567-e89b-12d3-a456-426614174001',
    })
    @IsUUID()
    farmId: string;
}

export class CreateHaverstDto {

    @ApiProperty({
        description: 'Ano da safra',
        example: 2021,
    })
    @IsInt()
    year: number;

    @ApiProperty({
        description: 'Identificador único da fazenda responsável pela safra (UUID)',
        example: '123e4567-e89b-12d3-a456-426614174001',
    })
    @IsUUID()
    farmId: string;
}
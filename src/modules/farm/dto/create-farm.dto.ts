import {IsNotEmpty, IsNumber, IsString, IsUUID, Matches, Min} from 'class-validator';

export class CreateFarmDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    city: string;

    @IsString()
    @IsNotEmpty()
    state: string;

    @IsNumber()
    @Min(0)
    totalArea: number;

    @IsNumber()
    @Min(0)
    arableArea: number;

    @IsNumber()
    @Min(0)
    vegetationArea: number;

    @IsUUID()
    @IsNotEmpty()
    farmerId: string;
}
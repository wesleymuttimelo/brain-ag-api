import {IsNotEmpty, IsNumber, IsString, IsUUID, Matches, Min,IsOptional} from 'class-validator';
import {Crop} from "../entities/crop.entity";

export class CreateCropDto implements Crop {
    @IsOptional()
    @IsString()
    id?: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    harvestId: string;

    @IsString()
    @IsNotEmpty()
    farmId: string;
}
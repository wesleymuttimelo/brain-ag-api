import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateFarmerDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @Matches(/^\d{11}$|^\d{14}$/, {
        message: 'CPF/CNPJ must be a valid number (11 or 14 digits)',
    })
    document: string;
}
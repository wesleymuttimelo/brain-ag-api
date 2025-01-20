import { IsNotEmpty, IsString, Matches } from 'class-validator';
import {IsCpfOrCnpj} from "../../../share/validators/cpf-cnpj.validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateFarmerDto {
    @ApiProperty({
        description: 'Nome do fazendeiro.',
        example: 'João da Silva',
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        description: 'Documento do farmer (CPF ou CNPJ).',
        example: '123.456.789-10',
    })
    @IsNotEmpty()
    @IsCpfOrCnpj({
        message: 'CPF ou CNPJ inválido.',
    })
    document: string;
}
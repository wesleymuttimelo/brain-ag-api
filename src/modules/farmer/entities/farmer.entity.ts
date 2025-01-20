import {ApiProperty} from "@nestjs/swagger";

export class Property {
    @ApiProperty({
        description: 'Identificador único da fazenda (UUID)',
        example: '123e4567-e89b-12d3-a456-426614174000',
    })
    id: string;

    @ApiProperty({
        description: 'Nome da fazenda',
        example: 'Fazenda Primavera',
    })
    name: string;

    @ApiProperty({
        description: 'Cidade onde a fazenda está localizada',
        example: 'São Paulo',
    })
    city: string;

    @ApiProperty({
        description: 'Estado onde a fazenda está localizada',
        example: 'SP',
    })
    state: string;

    @ApiProperty({
        description: 'Área total da fazenda (em hectares)',
        example: 5000,
    })
    totalArea: number;

    @ApiProperty({
        description: 'Área arável da fazenda (em hectares)',
        example: 3000,
    })
    arableArea: number;

    @ApiProperty({
        description: 'Área com vegetação preservada na fazenda (em hectares)',
        example: 2000,
    })
    vegetationArea: number;

    @ApiProperty({
        description: 'Identificador único do agricultor associado (UUID)',
        example: '123e4567-e89b-12d3-a456-426614174000',
    })
    farmerId: string;
}

export type properties = {
    id: string;
    name: string;
    city: string;
    state: string;
    totalArea: number;
    arableArea: number;
    vegetationArea: number;
    farmerId: string;
}

export class Farmer {
    @ApiProperty({
        description: 'ID do Farmer',
        example: '123e4567-e89b-12d3-a456-426614174000',
    })
    id: string
    @ApiProperty({
        description: 'Nome do Farmer',
        example: 'João da Silva',
    })
    name: string
    @ApiProperty({
        description: 'Documento do Farmer (CPF ou CNPJ)',
        example: '123.456.789-10',
    })
    document: string
    @ApiProperty({
        description: 'Propriedades do agricultor (lista de fazendas associadas)',
        type: [Property],
    })
    properties?: properties[]
}
//
// export class Harvest {
//     id: string
//     date: Date
//     cropId: string
//     crop: Crop
// }
//
// export class Farm {
//     id:              String
//     name:           String
//     city:             String
//     state:           String
//     totalArea:       number
//     arableArea:       number
//     vegetationArea:   number
//     farmerId:         String
//     farmer:           Farmer
//     crops:            Crop[]
//     harvests:        Harvest[]
// }
//
// export class Crop {
//     id:       String
//     name:      String
//     harvestId: String
//     farmId:   String
// }

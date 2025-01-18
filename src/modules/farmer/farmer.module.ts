import { Module } from '@nestjs/common';
import { FarmerService } from './farmer.service';
import { FarmerController } from './farmer.controller';
import { PrismaModule } from '../../database/prisma/prisma.module' // Importa o PrismaModule para os serviços

@Module({
    imports: [PrismaModule], // Importa o PrismaModule que possui o PrismaService
    controllers: [FarmerController],
    providers: [FarmerService],
    exports: [FarmerService], // Exporta o FarmerService para uso em outros módulos (se necessário)
})
export class FarmerModule {}
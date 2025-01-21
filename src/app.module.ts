import { Module } from '@nestjs/common';
import {FarmerModule} from "./modules/farmer/farmer.module";
import {FarmModule} from "./modules/farm/farm.module";
import {HarvestModule} from "./modules/harvest/harvest.module";
import {CropModule} from "./modules/crops/crop.module";

@Module({
  imports: [FarmerModule, FarmModule, HarvestModule,CropModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

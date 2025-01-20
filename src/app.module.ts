import { Module } from '@nestjs/common';
import {FarmerModule} from "./modules/farmer/farmer.module";
import {FarmModule} from "./modules/farm/farm.module";
import {HarvestModule} from "./modules/harvest/harvest.module";

@Module({
  imports: [FarmerModule, FarmModule, HarvestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

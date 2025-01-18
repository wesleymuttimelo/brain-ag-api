import { Module } from '@nestjs/common';
import {FarmerModule} from "./modules/farmer/farmer.module";

@Module({
  imports: [FarmerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

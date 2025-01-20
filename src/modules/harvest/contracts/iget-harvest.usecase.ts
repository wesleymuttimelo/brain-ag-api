import {Harvest} from "../entities/harverst.entity";

export interface IGetHarvestUseCase {
  execute(id: string): Promise<Harvest>;
}
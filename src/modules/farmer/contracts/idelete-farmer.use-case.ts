export interface IDeleteFarmerUseCase {
  execute(id: string): Promise<void>;
}
export interface IDeleteHarvestUseCase {
    execute(id: string): Promise<void>;
}
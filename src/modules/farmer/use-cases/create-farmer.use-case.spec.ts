import { Test, TestingModule } from '@nestjs/testing';
import {CreateFarmerUseCase} from "./create-farmer.use-case";
import {IFarmerRepository} from "../repositories/contract/ifarmer-repository";
import {CreateFarmerDto} from "../dto/create-farmer.dto";
import {Farmer} from "@prisma/client";
import {UpdateFarmerDto} from "../dto/update-farmer.dto";

describe('CreateFarmerUseCase', () => {
    let createFarmerUseCase: CreateFarmerUseCase;
    let farmerRepositoryMock: jest.Mocked<IFarmerRepository>;

    beforeEach(async () => {
        const farmerRepositoryMockProvider = {
            provide: 'IFarmerRepository',
            useValue: {
                create: jest.fn() as jest.MockInstance<Promise<Farmer>, [CreateFarmerDto]>,
                listAll: jest.fn() as jest.MockInstance<Promise<Farmer[]>, []>,
                getById: jest.fn() as jest.MockInstance<Promise<Farmer>, [string]>,
                delete: jest.fn() as jest.MockInstance<Promise<void>, [string]>,
                update: jest.fn() as jest.MockInstance<Promise<Farmer>, [string, UpdateFarmerDto]>,
            },
        };

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CreateFarmerUseCase,
                farmerRepositoryMockProvider,
            ],
        }).compile();

        createFarmerUseCase = module.get<CreateFarmerUseCase>(CreateFarmerUseCase);
        farmerRepositoryMock = module.get<jest.Mocked<IFarmerRepository>>('IFarmerRepository');
    });

    it('should call the create method of the repository with the correct data', async () => {
        const farmerData: CreateFarmerDto = {
            name:"Teste",
            document:"39129434866"
        }

        const createdFarmer: Farmer = {
            id: '123',
            name:"Teste",
            document:"39129434866"
        };

        farmerRepositoryMock.create.mockResolvedValue(createdFarmer);
        const result = await createFarmerUseCase.execute(farmerData);

        expect(farmerRepositoryMock.create).toHaveBeenCalledWith(farmerData);
        expect(result).toEqual(createdFarmer);
    });

    it('should throw an error if the repository throws an error', async () => {
        const farmerData: CreateFarmerDto = {
            "name":"Teste",
            "document":"39129434866"
        }

        farmerRepositoryMock.create.mockRejectedValue(
            new Error('Erro ao criar o fazendeiro'),
        );

        await expect(createFarmerUseCase.execute(farmerData)).rejects.toThrow(
            'Erro ao criar o fazendeiro',
        );

        expect(farmerRepositoryMock.create).toHaveBeenCalledWith(farmerData);
    });
});
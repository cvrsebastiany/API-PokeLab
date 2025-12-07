import { Test, TestingModule } from '@nestjs/testing';
import { TreatmentUpdatesService } from './treatment-updates.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TreatmentUpdate } from './entities/treatment-update.entity';

describe('TreatmentUpdatesService', () => {
  let service: TreatmentUpdatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TreatmentUpdatesService,
        {
          provide: getRepositoryToken(TreatmentUpdate),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
            find: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<TreatmentUpdatesService>(TreatmentUpdatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

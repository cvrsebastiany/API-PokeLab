import { Test, TestingModule } from '@nestjs/testing';
import { TreatmentUpdatesController } from './treatment-updates.controller';
import { TreatmentUpdatesService } from './treatment-updates.service';

describe('TreatmentUpdatesController', () => {
  let controller: TreatmentUpdatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TreatmentUpdatesController],
      providers: [
        {
          provide: TreatmentUpdatesService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<TreatmentUpdatesController>(TreatmentUpdatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { TipsCategoryService } from './tips-category.service';

describe('TipsCategoryService', () => {
  let service: TipsCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipsCategoryService],
    }).compile();

    service = module.get<TipsCategoryService>(TipsCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

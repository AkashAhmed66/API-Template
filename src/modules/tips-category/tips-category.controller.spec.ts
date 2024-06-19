import { Test, TestingModule } from '@nestjs/testing';
import { TipsCategoryController } from './tips-category.controller';
import { TipsCategoryService } from './tips-category.service';

describe('TipsCategoryController', () => {
  let controller: TipsCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipsCategoryController],
      providers: [TipsCategoryService],
    }).compile();

    controller = module.get<TipsCategoryController>(TipsCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

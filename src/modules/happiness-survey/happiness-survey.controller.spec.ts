import { Test, TestingModule } from '@nestjs/testing';
import { HappinessSurveyController } from './happiness-survey.controller';
import { HappinessSurveyService } from './happiness-survey.service';

describe('HappinessSurveyController', () => {
  let controller: HappinessSurveyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HappinessSurveyController],
      providers: [HappinessSurveyService],
    }).compile();

    controller = module.get<HappinessSurveyController>(HappinessSurveyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

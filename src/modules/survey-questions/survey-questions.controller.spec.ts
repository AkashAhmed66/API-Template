import { Test, TestingModule } from '@nestjs/testing';
import { SurveyQuestionsController } from './survey-questions.controller';
import { SurveyQuestionsService } from './survey-questions.service';

describe('SurveyQuestionsController', () => {
  let controller: SurveyQuestionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurveyQuestionsController],
      providers: [SurveyQuestionsService],
    }).compile();

    controller = module.get<SurveyQuestionsController>(SurveyQuestionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

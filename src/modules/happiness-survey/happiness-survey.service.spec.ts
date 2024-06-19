import { Test, TestingModule } from '@nestjs/testing';
import { HappinessSurveyService } from './happiness-survey.service';

describe('HappinessSurveyService', () => {
  let service: HappinessSurveyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HappinessSurveyService],
    }).compile();

    service = module.get<HappinessSurveyService>(HappinessSurveyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

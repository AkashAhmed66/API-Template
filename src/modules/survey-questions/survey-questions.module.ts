import { Module } from '@nestjs/common';
import { SurveyQuestionsService } from './survey-questions.service';
import { SurveyQuestionsController } from './survey-questions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyQuestion } from './entities/survey-question.entity';
import { Survey } from '../survey/entities/survey.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyQuestion, Survey])],
  controllers: [SurveyQuestionsController],
  providers: [SurveyQuestionsService, SurveyQuestion],
})
export class SurveyQuestionsModule {}

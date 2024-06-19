import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survey } from './entities/survey.entity';
import { SurveyQuestion } from '../survey-questions/entities/survey-question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Survey, SurveyQuestion])],
  controllers: [SurveyController],
  providers: [SurveyService, Survey],
})
export class SurveyModule {}

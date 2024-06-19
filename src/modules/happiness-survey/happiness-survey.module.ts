import { Module } from '@nestjs/common';
import { HappinessSurveyService } from './happiness-survey.service';
import { HappinessSurveyController } from './happiness-survey.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HappinessSurvey } from './entities/happiness-survey.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HappinessSurvey])],
  controllers: [HappinessSurveyController],
  providers: [HappinessSurveyService, HappinessSurvey],
})
export class HappinessSurveyModule {}

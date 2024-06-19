import { PartialType } from '@nestjs/mapped-types';
import { CreateHappinessSurveyDto } from './create-happiness-survey.dto';

export class UpdateHappinessSurveyDto extends PartialType(CreateHappinessSurveyDto) {}

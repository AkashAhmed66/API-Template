import { Injectable } from '@nestjs/common';
import { CreateHappinessSurveyDto } from './dto/create-happiness-survey.dto';
import { UpdateHappinessSurveyDto } from './dto/update-happiness-survey.dto';

@Injectable()
export class HappinessSurveyService {
  create(createHappinessSurveyDto: CreateHappinessSurveyDto) {
    return 'This action adds a new happinessSurvey';
  }

  findAll() {
    return `This action returns all happinessSurvey`;
  }

  findOne(id: number) {
    return `This action returns a #${id} happinessSurvey`;
  }

  update(id: number, updateHappinessSurveyDto: UpdateHappinessSurveyDto) {
    return `This action updates a #${id} happinessSurvey`;
  }

  remove(id: number) {
    return `This action removes a #${id} happinessSurvey`;
  }
}

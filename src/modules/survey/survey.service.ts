import { Injectable } from '@nestjs/common';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Survey } from './entities/survey.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SurveyService {

  constructor(@InjectRepository(Survey) private surveyRepository: Repository<Survey>){}
  
  create(createSurveyDto: CreateSurveyDto) {
   const survey = this.surveyRepository.create(createSurveyDto);
   return this.surveyRepository.save(survey);
  }

  findAll() {
    return this.surveyRepository.find({relations: ['surveyQuestion']});
  }

  findOne(id: number) {
    return this.surveyRepository.findOneBy({id});
  }

  update(id: number, updateSurveyDto: UpdateSurveyDto) {
    return this.surveyRepository.update({id}, {...updateSurveyDto});
  }

  remove(id: number) {
    return this.surveyRepository.delete({id});
  }
}

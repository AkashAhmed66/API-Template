import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSurveyQuestionDto } from './dto/create-survey-question.dto';
import { UpdateSurveyQuestionDto } from './dto/update-survey-question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SurveyQuestion } from './entities/survey-question.entity';
import { Repository } from 'typeorm';
import { Survey } from '../survey/entities/survey.entity';

@Injectable()
export class SurveyQuestionsService {

  constructor(@InjectRepository(SurveyQuestion) private surveyQuestionsRepository: Repository<SurveyQuestion>,
              @InjectRepository(Survey) private surveyRepository : Repository<Survey>){}
  
  async create(id : number, createSurveyQuestionDto: CreateSurveyQuestionDto) {
    const survey = await this.surveyRepository.findOneBy({id})
    if(!survey){
      throw new HttpException(
        'Survey Not Found',
        HttpStatus.BAD_REQUEST
      );
    }
    const question = this.surveyQuestionsRepository.create({
      ...createSurveyQuestionDto,
      survey
    });
    return this.surveyQuestionsRepository.save(question);
  }

  findAll() {
    return this.surveyQuestionsRepository.find({relations: ['survey']});
  }

  findOne(id: number) {
    return this.surveyQuestionsRepository.findOneBy({id});
  }

  update(id: number, updateSurveyQuestionDto: UpdateSurveyQuestionDto) {
    return this.surveyQuestionsRepository.update({id}, {...updateSurveyQuestionDto});
  }

  remove(id: number) {
    return this.surveyQuestionsRepository.delete({id});
  }
}

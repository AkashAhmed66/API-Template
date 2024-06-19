import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { SurveyQuestionsService } from './survey-questions.service';
import { CreateSurveyQuestionDto } from './dto/create-survey-question.dto';
import { UpdateSurveyQuestionDto } from './dto/update-survey-question.dto';

@Controller('survey-questions')
export class SurveyQuestionsController {
  constructor(private readonly surveyQuestionsService: SurveyQuestionsService) {}

  @Post(':id')
  create(@Param('id', ParseIntPipe) id : number, @Body() createSurveyQuestionDto: CreateSurveyQuestionDto) {
    return this.surveyQuestionsService.create(id, createSurveyQuestionDto);
  }

  @Get()
  findAll() {
    return this.surveyQuestionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.surveyQuestionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateSurveyQuestionDto: UpdateSurveyQuestionDto) {
    return this.surveyQuestionsService.update(+id, updateSurveyQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.surveyQuestionsService.remove(+id);
  }
}

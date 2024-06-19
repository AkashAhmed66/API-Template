import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HappinessSurveyService } from './happiness-survey.service';
import { CreateHappinessSurveyDto } from './dto/create-happiness-survey.dto';
import { UpdateHappinessSurveyDto } from './dto/update-happiness-survey.dto';

@Controller('happiness-survey')
export class HappinessSurveyController {
  constructor(private readonly happinessSurveyService: HappinessSurveyService) {}

  @Post()
  create(@Body() createHappinessSurveyDto: CreateHappinessSurveyDto) {
    return this.happinessSurveyService.create(createHappinessSurveyDto);
  }

  @Get()
  findAll() {
    return this.happinessSurveyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.happinessSurveyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHappinessSurveyDto: UpdateHappinessSurveyDto) {
    return this.happinessSurveyService.update(+id, updateHappinessSurveyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.happinessSurveyService.remove(+id);
  }
}

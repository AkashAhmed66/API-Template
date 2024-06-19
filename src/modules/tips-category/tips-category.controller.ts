import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipsCategoryService } from './tips-category.service';
import { CreateTipsCategoryDto } from './dto/create-tips-category.dto';
import { UpdateTipsCategoryDto } from './dto/update-tips-category.dto';

@Controller('tips-category')
export class TipsCategoryController {
  constructor(private readonly tipsCategoryService: TipsCategoryService) {}

  @Post()
  create(@Body() createTipsCategoryDto: CreateTipsCategoryDto) {
    return this.tipsCategoryService.create(createTipsCategoryDto);
  }

  @Get()
  findAll() {
    return this.tipsCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipsCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipsCategoryDto: UpdateTipsCategoryDto) {
    return this.tipsCategoryService.update(+id, updateTipsCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipsCategoryService.remove(+id);
  }
}

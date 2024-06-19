import { PartialType } from '@nestjs/mapped-types';
import { CreateTipsCategoryDto } from './create-tips-category.dto';

export class UpdateTipsCategoryDto extends PartialType(CreateTipsCategoryDto) {}

import { Module } from '@nestjs/common';
import { TipsCategoryService } from './tips-category.service';
import { TipsCategoryController } from './tips-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipsCategory } from './entities/tips-category.entity';
import { Tip } from '../tips/entities/tip.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipsCategory, Tip])],
  controllers: [TipsCategoryController],
  providers: [TipsCategoryService, TipsCategory],
})
export class TipsCategoryModule {}

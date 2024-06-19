import { Module } from '@nestjs/common';
import { TipsService } from './tips.service';
import { TipsController } from './tips.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tip } from './entities/tip.entity';
import { TipsCategory } from '../tips-category/entities/tips-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tip, TipsCategory])],
  controllers: [TipsController],
  providers: [TipsService, Tip],
})
export class TipsModule {}

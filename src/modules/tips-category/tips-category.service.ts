import { Inject, Injectable } from '@nestjs/common';
import { CreateTipsCategoryDto } from './dto/create-tips-category.dto';
import { UpdateTipsCategoryDto } from './dto/update-tips-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TipsCategory } from './entities/tips-category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TipsCategoryService {
  constructor(@InjectRepository(TipsCategory) private tipsCategoryRepository : Repository<TipsCategory>){}
  
  create(createTipsCategoryDto: CreateTipsCategoryDto) {
    const category =  this.tipsCategoryRepository.create(createTipsCategoryDto);
    return this.tipsCategoryRepository.save(category);
  }

  findAll() {
    return this.tipsCategoryRepository.find({relations: ['tips']});
  }

  findOne(id: number) {
    return this.tipsCategoryRepository.findOneBy({id});
  }

  update(id: number, updateTipsCategoryDto: UpdateTipsCategoryDto) {
    return this.tipsCategoryRepository.update({id}, {...updateTipsCategoryDto});
  }

  remove(id: number) {
    return this.tipsCategoryRepository.delete({id});
  }
}

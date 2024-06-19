import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTipDto } from './dto/create-tip.dto';
import { UpdateTipDto } from './dto/update-tip.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tip } from './entities/tip.entity';
import { Repository } from 'typeorm';
import { TipsCategory } from '../tips-category/entities/tips-category.entity';

@Injectable()
export class TipsService {

  constructor(@InjectRepository(Tip) private tipRepository: Repository<Tip>,
              @InjectRepository(TipsCategory) private tipCategoryRepository: Repository<TipsCategory>){}

  async create(id : number, createTipDto: CreateTipDto) {
    const category = await this.tipCategoryRepository.findOneBy({id})
    if(!category){
      throw new HttpException(
        'Category Not Found',
        HttpStatus.BAD_REQUEST
      );
    }
    const tips = this.tipRepository.create({
      ...createTipDto,
      category
    });
    return this.tipRepository.save(tips);
  }

  findAll() {
    return this.tipRepository.find({ relations: [ 'category' ]});
  }

  findOne(id: number) {
    return `This action returns a #${id} tip`;
  }

  update(id: number, updateTipDto: UpdateTipDto) {
    return `This action updates a #${id} tip`;
  }

  remove(id: number) {
    return `This action removes a #${id} tip`;
  }
}

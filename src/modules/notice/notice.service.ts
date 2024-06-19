import { Injectable } from '@nestjs/common';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Notice } from './entities/notice.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NoticeService {
  constructor(@InjectRepository(Notice) private noticeRepository: Repository<Notice>){}
  create(createNoticeDto: CreateNoticeDto) {
    const notice = this.noticeRepository.create(createNoticeDto);
    return this.noticeRepository.save(notice);
  }

  findAll() {
    return this.noticeRepository.find();
  }

  findOne(id: number) {
    return this.noticeRepository.findOneBy({id});
  }

  update(id: number, updateNoticeDto: UpdateNoticeDto) {
    return this.noticeRepository.update({id}, {...updateNoticeDto});
  }

  remove(id: number) {
    return this.noticeRepository.delete({id});
  }
}

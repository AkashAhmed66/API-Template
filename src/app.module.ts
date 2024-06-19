import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { User } from './modules/users/entities/user.entity';
import { NoticeModule } from './modules/notice/notice.module';
import { TipsModule } from './modules/tips/tips.module';
import { TicketsModule } from './modules/tickets/tickets.module';
import { SurveyModule } from './modules/survey/survey.module';
import { HappinessSurveyModule } from './modules/happiness-survey/happiness-survey.module';
import { TipsCategoryModule } from './modules/tips-category/tips-category.module';
import { Notice } from './modules/notice/entities/notice.entity';
import { TipsCategory } from './modules/tips-category/entities/tips-category.entity';
import { Tip } from './modules/tips/entities/tip.entity';
import { Ticket } from './modules/tickets/entities/ticket.entity';
import { Survey } from './modules/survey/entities/survey.entity';
import { SurveyQuestionsModule } from './modules/survey-questions/survey-questions.module';
import { SurveyQuestion } from './modules/survey-questions/entities/survey-question.entity';
import { HappinessSurvey } from './modules/happiness-survey/entities/happiness-survey.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'workerapp',
    entities: [User, Notice, TipsCategory, Tip, Ticket, Survey, SurveyQuestion, HappinessSurvey],
    synchronize: true,
  }), UsersModule, NoticeModule, TipsModule, TicketsModule, SurveyModule, HappinessSurveyModule, TipsCategoryModule, SurveyQuestionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

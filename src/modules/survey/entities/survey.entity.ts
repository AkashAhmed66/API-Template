import { SurveyQuestion } from "src/modules/survey-questions/entities/survey-question.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "surveys"})
export class Survey {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    date: Date;

    @Column()
    imageUrl: string

    @Column()
    author: string;

    @OneToMany(()=>SurveyQuestion, (surveyQuestion)=>surveyQuestion.survey)
    surveyQuestion: SurveyQuestion[];
}

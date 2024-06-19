import { Survey } from "src/modules/survey/entities/survey.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "questions" })
export class SurveyQuestion{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    questions: string;

    @Column()
    option1: string;
    
    @Column()
    option2: string;
    
    @Column()
    option3: string;
    
    @Column()
    option4: string;

    @ManyToOne(()=>Survey, (survey)=>survey.surveyQuestion)
    survey: Survey;
}
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'happiness'})
export class HappinessSurvey {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    happiness: string;

    @Column()
    reason: string;

    @Column()
    details: string;
}

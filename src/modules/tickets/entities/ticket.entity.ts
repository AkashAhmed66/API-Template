import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name : 'tickets'})
export class Ticket {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    topic: string;

    @Column()
    title: string;

    @Column()
    details: string;

    @Column()
    imageUrl: string;
}

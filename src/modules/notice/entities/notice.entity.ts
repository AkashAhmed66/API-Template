import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'notices'})
export class Notice {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    date: Date;

    @Column()
    imageUrl: string;

    @Column()
    author: string;
}

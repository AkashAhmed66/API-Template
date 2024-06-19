import { TipsCategory } from "src/modules/tips-category/entities/tips-category.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tips'})
export class Tip {
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

    @ManyToOne(()=>TipsCategory, (tipcategory)=>tipcategory.tips)
    category: TipsCategory;
}

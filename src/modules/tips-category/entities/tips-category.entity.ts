import { Tip } from "src/modules/tips/entities/tip.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tipscategories'})
export class TipsCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    category: string;

    @Column()
    logoUrl: string;

    @OneToMany(()=> Tip, (tip)=>tip.category)
    tips: Tip[];
}

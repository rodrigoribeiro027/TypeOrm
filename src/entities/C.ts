import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, } from "typeorm";
import { A } from "./A";
import { B} from "./B";



@Entity({name:"cc"})
export class C{
    @PrimaryGeneratedColumn()
    id:number;
    
    @ManyToOne((type) => A, {onDelete: "CASCADE"})
    @JoinColumn({
        name: "ida",
        referencedColumnName: "id",
        foreignKeyConstraintName: "fk_a"
    })
    a: A;

    @ManyToOne((type) => B, {onDelete: "CASCADE"})
    @JoinColumn({
        name: "idb",
        referencedColumnName: "id",
        foreignKeyConstraintName: "fk_b"
    })
    b: B;
}
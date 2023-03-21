import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, } from "typeorm";


@Entity({name:"bb"})
export class B {
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    name:String
}
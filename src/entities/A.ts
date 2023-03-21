import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, } from "typeorm";


@Entity({name:"aa"})
export class A {
@PrimaryGeneratedColumn()
id:number;
@Column()
name:String
}
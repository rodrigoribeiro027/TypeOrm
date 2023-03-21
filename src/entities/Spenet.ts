import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, } from "typeorm";
import { User } from "./User";

@Entity({ name: "spents" })
export class Spent {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, length: 50 })
    description: string;

    @Column({ type: "decimal" })
    value: number;

    @ManyToOne((type) => User, {onDelete: "CASCADE"})
    @JoinColumn({
        name: "iduser",
        referencedColumnName: "id",
        foreignKeyConstraintName: "fk_spent"
    })
    user: User;


}
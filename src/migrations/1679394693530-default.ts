import { MigrationInterface, QueryRunner } from "typeorm";

export class default1679394693530 implements MigrationInterface {
    name = 'default1679394693530'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "mail" varchar(70) NOT NULL, "password" varchar(100) NOT NULL, CONSTRAINT "UQ_2e5b50f4b7c081eceea476ad128" UNIQUE ("mail"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}

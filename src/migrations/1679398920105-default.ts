import { MigrationInterface, QueryRunner } from "typeorm";

export class default1679398920105 implements MigrationInterface {
    name = 'default1679398920105'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "aa" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "bb" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "cc" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "ida" integer, "idb" integer)`);
        await queryRunner.query(`CREATE TABLE "temporary_cc" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "ida" integer, "idb" integer, CONSTRAINT "fk_a" FOREIGN KEY ("ida") REFERENCES "aa" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "fk_b" FOREIGN KEY ("idb") REFERENCES "bb" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_cc"("id", "ida", "idb") SELECT "id", "ida", "idb" FROM "cc"`);
        await queryRunner.query(`DROP TABLE "cc"`);
        await queryRunner.query(`ALTER TABLE "temporary_cc" RENAME TO "cc"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cc" RENAME TO "temporary_cc"`);
        await queryRunner.query(`CREATE TABLE "cc" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "ida" integer, "idb" integer)`);
        await queryRunner.query(`INSERT INTO "cc"("id", "ida", "idb") SELECT "id", "ida", "idb" FROM "temporary_cc"`);
        await queryRunner.query(`DROP TABLE "temporary_cc"`);
        await queryRunner.query(`DROP TABLE "cc"`);
        await queryRunner.query(`DROP TABLE "bb"`);
        await queryRunner.query(`DROP TABLE "aa"`);
    }

}

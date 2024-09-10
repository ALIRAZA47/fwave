import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedEmailFieldInUserEnt1725962930886 implements MigrationInterface {
    name = 'AddedEmailFieldInUserEnt1725962930886'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`email\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`email\``);
    }

}

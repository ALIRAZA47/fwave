import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBookEntsAndUpdateUserEmailContraint1725966820804 implements MigrationInterface {
    name = 'CreateBookEntsAndUpdateUserEmailContraint1725966820804'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`book\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`title\` varchar(255) NOT NULL, \`isbn\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_c10a44a29ef231062f22b1b7ac\` (\`title\`), UNIQUE INDEX \`IDX_bd183604b9c828c0bdd92cafab\` (\`isbn\`), UNIQUE INDEX \`IDX_034fb78600f8b9f101e69af6a7\` (\`description\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`book-reviews\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`comment\` varchar(255) NOT NULL, \`userId\` int NULL, \`bookId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`)`);
        await queryRunner.query(`ALTER TABLE \`book-reviews\` ADD CONSTRAINT \`FK_af9f8cd91d0ad204cbc08e3216d\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`book-reviews\` ADD CONSTRAINT \`FK_bd6e7af4a5364b12cca255c194a\` FOREIGN KEY (\`bookId\`) REFERENCES \`book\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book-reviews\` DROP FOREIGN KEY \`FK_bd6e7af4a5364b12cca255c194a\``);
        await queryRunner.query(`ALTER TABLE \`book-reviews\` DROP FOREIGN KEY \`FK_af9f8cd91d0ad204cbc08e3216d\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\``);
        await queryRunner.query(`DROP TABLE \`book-reviews\``);
        await queryRunner.query(`DROP INDEX \`IDX_034fb78600f8b9f101e69af6a7\` ON \`book\``);
        await queryRunner.query(`DROP INDEX \`IDX_bd183604b9c828c0bdd92cafab\` ON \`book\``);
        await queryRunner.query(`DROP INDEX \`IDX_c10a44a29ef231062f22b1b7ac\` ON \`book\``);
        await queryRunner.query(`DROP TABLE \`book\``);
    }

}

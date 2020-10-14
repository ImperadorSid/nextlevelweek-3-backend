import { MigrationInterface, QueryRunner, Table } from 'typeorm';

/* eslint class-methods-use-this: off, import/prefer-default-export: off */
export class createImages1602643814153 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'images',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'path',
          type: 'varchar',
        },
        {
          name: 'orphanageId',
          type: 'integer',
        },
      ],
      foreignKeys: [
        {
          name: 'imageOrphanage',
          columnNames: ['orphanageId'],
          referencedTableName: 'orphanages',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images');
  }
}

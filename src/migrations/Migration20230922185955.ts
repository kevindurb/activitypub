import { Migration } from '@mikro-orm/migrations';

export class Migration20230922185955 extends Migration {
  public async up(): Promise<void> {
    this.addSql(
      'create table "objects" ("id" varchar(255) not null, "properties" jsonb not null, constraint "objects_pkey" primary key ("id"));',
    );
  }

  public async down(): Promise<void> {
    this.addSql('drop table if exists "objects" cascade;');
  }
}

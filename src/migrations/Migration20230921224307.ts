import { Migration } from '@mikro-orm/migrations';

export class Migration20230921224307 extends Migration {
  public async up(): Promise<void> {
    this.addSql(
      'create table "actors" ("_username" varchar(255) not null, constraint "actors_pkey" primary key ("_username"));',
    );
  }

  public async down(): Promise<void> {
    this.addSql('drop table if exists "actors" cascade;');
  }
}

import { Migration } from '@mikro-orm/migrations';

export class Migration20230925151015 extends Migration {
  public async up(): Promise<void> {
    this.addSql(
      'alter table "objects" add column "created_at" timestamptz(0) not null, add column "updated_at" timestamptz(0) not null;',
    );
  }

  public async down(): Promise<void> {
    this.addSql('alter table "objects" drop column "created_at";');
    this.addSql('alter table "objects" drop column "updated_at";');
  }
}

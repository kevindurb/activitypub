import { Migration } from '@mikro-orm/migrations';

export class Migration20230918195616 extends Migration {
  public async up(): Promise<void> {
    this.addSql(
      'create table "user" ("user_id" varchar(255) not null, constraint "user_pkey" primary key ("user_id"));',
    );
  }
}

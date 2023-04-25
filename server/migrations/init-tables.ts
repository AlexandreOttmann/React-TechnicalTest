import { Knex } from "knex";
import createTables from "../src/infrastructure/db/createTables";

export async function up(db: Knex): Promise<void> {
  await createTables(db);
}

export async function down(db: Knex): Promise<void> {
  await db.schema.dropTable("cards");
}

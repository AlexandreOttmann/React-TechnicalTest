import { Knex } from "knex";

const createTables = (db: Knex) =>
  db.schema.createTable("cards", (table) => {
    table.uuid("id");
    table.string("name");
    table.string("pan");
    table.string("pin");
    table.string("expiresAt");
    table.boolean("expired");
    table.string("status");
    table.timestamps(true, true, true);
    table.boolean('isPhysical');
    table.string('owner');
  });

export default createTables;

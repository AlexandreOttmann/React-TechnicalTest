import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./src/infrastructure/db/db.development.sqlite"
    },
    useNullAsDefault: true,
    seeds: {
      directory: './seeds/dev'
    }
  },
  test: {
    client: "sqlite3",
    connection: {
      filename: "./src/infrastructure/db/db.test.sqlite"
    },
    useNullAsDefault: true,
  },
};

export default config;

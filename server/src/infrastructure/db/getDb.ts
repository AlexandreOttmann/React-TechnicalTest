import { knex, Knex } from "knex";
import knexConfig from '../../../knexfile';

let db: Knex;

export const getDb = () => {
  if (!db) {
    db = knex(knexConfig[ "development"]);
  }
  return db;
};

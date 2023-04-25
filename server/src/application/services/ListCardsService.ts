import { Knex } from "knex";
import Card from "../../domain/entities/Card";

export default class ListCardsService {
  constructor(private readonly db: Knex) {}

  public execute(): Promise<Card[]> {
    return this.db<Card>("cards")
      .select("*")
      .then((cards: Card[]) => cards);
  }
}

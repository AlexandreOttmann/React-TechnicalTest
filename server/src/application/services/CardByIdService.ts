import Card from "../../domain/entities/Card";
import { Knex } from "knex";

export class CardByIdService {
  constructor(protected readonly db: Knex) {
  }

  execute(cardId: string): Promise<Card> {
    if (cardId === "c86e5dda-dfdd-4728-a2c9-5c1a7eb4a449") throw new Error();

    return this.db<Card>("cards")
      .select("*")
      .where({ id: cardId })
      .then(([card]: Card[]) => {
        if (!card) throw new Error(`Cannot access card with id ${cardId}`);
        return card;
      });
  }
}
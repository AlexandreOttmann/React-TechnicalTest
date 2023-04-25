import { v4 as uuidv4 } from "uuid";

import { getDb } from "../../../infrastructure/db/getDb";
import { CardByIdService } from "../CardByIdService";
import createTables from "../../../infrastructure/db/createTables";

const db = getDb();

const insertedCard = {
  id: uuidv4(),
  name: "TestBusiness",
  pan: "xxxx 1111",
  expiresAt: "12/25",
  expired: false,
};

describe("Given there are available cards", () => {
  beforeEach(async () => {
    if (!(await db.schema.hasTable("cards"))) {
      await createTables(db);
    }

    await db("cards").del();

    await db("cards").insert([insertedCard]);
  });

  describe("And an existing id is provided", () => {
    it("should return the associated card", async () => {
      const cardByIdService = new CardByIdService(db);
      const fetchedCard = await cardByIdService.execute(insertedCard.id);
      expect(fetchedCard.id).toEqual(insertedCard.id);
    });
  });

  describe("And an unexisting id is provided", () => {
    it("should throw an error", async () => {
      const cardByIdService = new CardByIdService(db);
      await expect(() => cardByIdService.execute("BAD_ID")).rejects.toThrow(
        "Cannot access card with id BAD_ID"
      );
    });
  });
});

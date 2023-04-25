import { v4 as uuidv4 } from "uuid";
import createTables from "../../../infrastructure/db/createTables";

import { getDb } from "../../../infrastructure/db/getDb";
import ListCardsService from "../ListCardsService";

const db = getDb();

describe("Given there are available cards", () => {
  beforeEach(async () => {
    if (!(await db.schema.hasTable("cards"))) {
      await createTables(db);
    }

    await db("cards").del();

    await db("cards").insert([
      {
        id: uuidv4(),
        name: "TestBusiness",
        pan: "xxxx 1111",
        expiresAt: "12/25",
        expired: false,
      },
      {
        id: uuidv4(),
        name: "TestBasic",
        pan: "xxxx 2222",
        expiresAt: "10/21",
        expired: true,
      },
    ]);
  });

  describe("And no filters requested", () => {
    it("should return the whole list of available cards", async () => {
      const listCardsService = new ListCardsService(db);
      const cards = await listCardsService.execute();
      expect(cards.length).toBe(2);
    });
  });
});

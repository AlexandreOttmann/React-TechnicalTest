import { v4 as uuidv4 } from "uuid";
import request from "supertest";

import app from "../../index";
import { getDb } from "../../../../db/getDb";
import createTables from "../../../../db/createTables";

const db = getDb();

describe("GET /health - success", () => {
  it("should return a ok status", async () => {
    const response = await request(app).get("/health");
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({
      status: "ok",
    });
  });
});

describe("GET /cards - success", () => {
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

    describe("And the client queries with no filters", () => {
      it("should return a 200 status and the whole list of cards", async () => {
        const response = await request(app).get("/cards");
        expect(response.status).toEqual(200);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        expect(response.body.length).toBe(2);
      });
    });
  });
});

describe("GET /cards/:id - success", () => {
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

      await db("cards").truncate();

      await db("cards").insert([insertedCard]);
    });

    describe("And the client queries a card using an existing id", () => {
      it("should return a 200 status and the appropriate card", async () => {
        const response = await request(app).get(`/cards/${insertedCard.id}`);
        expect(response.status).toEqual(200);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        expect(response.body.id).toBe(insertedCard.id);
      });
    });

    describe("And the client queries a card using an unexisting id", () => {
      it("should return a 40 status and the appropriate error", async () => {
        const response = await request(app).get(`/cards/BAD_ID`);
        expect(response.status).toEqual(400);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        expect(response.body.message).toBe("Cannot access card with id BAD_ID");
      });
    });
  });
});

import { NextFunction, Request, Response } from "express";
import ListCardsService from "../../../../application/services/ListCardsService";

import { getDb } from "../../../db/getDb";

const db = getDb();

function listCardsController(req: Request, res: Response, next: NextFunction) {
  const listCardsService = new ListCardsService(db);

  listCardsService
    .execute()
    .then((cards) => res.status(200).send(cards))
    .catch(next);
}

export default listCardsController;
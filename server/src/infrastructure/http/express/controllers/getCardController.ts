import { NextFunction, Request, Response } from "express";

import { getDb } from "../../../db/getDb";
import { CardByIdService } from "../../../../application/services/CardByIdService";

const db = getDb();

function getCardController(req: Request, res: Response, next: NextFunction) {
  const cardByIdService = new CardByIdService(db);

  cardByIdService
    .execute(req.params.id)
    .then((card) => res.status(200).send(card))
    .catch(next);
}

export default getCardController;
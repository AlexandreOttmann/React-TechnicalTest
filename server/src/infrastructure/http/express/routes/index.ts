import express, { Request, Response, Router } from "express";
import listCardsController from "../controllers/listCardsController";
import getCardController from "../controllers/getCardController";

const router: Router = express.Router();

/* GET /health */
router.get("/health", (req: Request, res: Response) =>
  res.status(200).send({ status: "ok" })
);

/*
GET /cards
curl -X GET -H "Content-Type: application/json" \
    localhost:3000/cards
*/
router.get(
  "/cards/",
  listCardsController
);

/*
GET /cards
curl -X GET -H "Content-Type: application/json" \
    localhost:3000/cards/<cardId>
*/
router.get(
  "/cards/:id",
  getCardController
);

export default router;

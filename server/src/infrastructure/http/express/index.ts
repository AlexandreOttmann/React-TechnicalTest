import cors from "cors";
import express from "express";

import router from "./routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", router);
app.use(function (err: Error, req: express.Request, res: express.Response) {
  const message = err.message || 'Something went wrong';
  res.status(400).send({
    message,
  })
});

export default app;

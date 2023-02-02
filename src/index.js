// express app setup
import express from "express";
import userRouter from "./routes/userRouter.js";
const app = express();
app.use(express.json());
const port = 3000;

global.db = [];
global.id = 0;

app.use(express.json());

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
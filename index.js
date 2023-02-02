// express app setup
const express = require("express");
const userRouter = require("./src/routes/userRouter");
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
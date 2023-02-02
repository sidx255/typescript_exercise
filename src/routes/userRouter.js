const express = require("express");
const {getUserDetails, createUser} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.get("/", getUserDetails);

userRouter.post("/", createUser);


module.exports = userRouter;
import express from "express";
import * as userController from "../controllers/userController.js";
const userRouter = express.Router();

userRouter.get("/", userController.getUserDetails);

userRouter.post("/", userController.createUser);
export default userRouter;


// export default { userRouter };
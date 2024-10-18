import express from "express";
import { getUsers } from "../../controllers/users/index.js";

const userRouter = express.Router();

userRouter.get("/getAllUsers", getUsers);

export default userRouter;

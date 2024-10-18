import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./app/DB/index.js";
import userRouter, { users } from "./app/routes/users/index.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/users", userRouter);
const port = process.env.PORT || 5001;

connectDb();

app.listen(port, () => {
  console.log(`App is listening on port http://localhost:${port}`);
});

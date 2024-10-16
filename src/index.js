import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 5001;

const jsonObj = {
  name: "John",
  age: 16,
};

app.get("/", (req, res) => {
  res.send(jsonObj);
});

app.listen(port, () => {
  console.log(`App is listening on port http://localhost:${port}`);
});

import express from "express";
import data from "./data.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/products", (req, res) => {
  res.status(200).send(data.featured);
});

app.listen(5050, () => {
  console.log("Server started on port 3000");
});

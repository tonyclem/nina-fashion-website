import express from "express";
import data from "./data.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/products", (req, res) => {
  res.status(200).send(data.products);
});

app.get("/api/products/slug/:slug", (req, res) => {
  const product = data.products.find(
    (product) => product.slug === req.params.slug
  );
  if (product) {
    res.status(200).send(product);
  } else {
    res.status(404).send("Product not found");
  }
});

app.listen(5050, () => {
  console.log("Server started on port 3000");
});

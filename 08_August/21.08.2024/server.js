const express = require("express");
const app = express();

const contact = { email: "LirazBarNir@gmail.com", phone: "0525724163" };

const { getProducts, getProductById } = require("./productsMul");

app.get("/", (req, res) => {
  res.send("Welcome to my basic Express server!");
});

app.get("/about", (req, res) => {
  res.send("This server was created by BABA fo BABA");
});

app.get("/contact", (req, res) => {
  res.json(contact);
});

app.get("/api/products", (req, res) => {
  res.json(getProducts());
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  res.json(getProductById(id));
});

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
  console.log("baba");
});

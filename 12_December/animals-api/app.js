const animalsRoutes = require("./routes/animalsRoutes.js");
const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const PORT = 3000;

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to database");
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/animals", animalsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

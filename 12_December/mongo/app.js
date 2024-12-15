const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

app.use(express.json());
dotenv.config();

const jokesRouter = require("./routes/jokesRotes.js");
const usersRouter = require("./routes/userRoutes.js");

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/jokes", jokesRouter);
app.use("/users", usersRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

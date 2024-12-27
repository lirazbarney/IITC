// libraries
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

// routes
const authRoutes = require("./routes/authRoutes.js");
const businessRoutes = require("./routes/businessRoutes.js");

// const and variables
const PORT = 3000;
const BASE_URL = "/api/v1/";
const app = express();

dotenv.config();

// connecting to the mongoose
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("connected to mongoDB");
});

// middlewares
app.use(express.json());
app.use(cors());

// /api/v1/auth
app.use(`${BASE_URL}auth`, authRoutes);

// /api/v1/business
app.use(`${BASE_URL}businesses`, businessRoutes);

// run the server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

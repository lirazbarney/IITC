const express = require("express");
const router = express.Router();
const {
  getJokes,
  getSpecificJoke,
  getRandomJoke,
  addNewJoke,
  deleteJoke,
} = require("../controllers/jokesController.js");

// //DELETE /jokes/:id
// router.delete(":id", deleteJoke);

//POST /jokes/add
router.post("/add", addNewJoke);

//GET /jokes/random
router.get("/random", getRandomJoke);

//GET /jokes/:id
router.get("/:id", getSpecificJoke);

//GET /jokes/
router.get("/", getJokes);

module.exports = router;

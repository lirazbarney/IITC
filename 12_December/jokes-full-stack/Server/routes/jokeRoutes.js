const express = require("express");
const {
  getJoke,
  getAllJokes,
  addNewJoke,
  updateJoke,
  deleteJoke,
  getRandomJoke,
} = require("../controllers/jokeController.js");
const router = express.Router();

// POST /api/v1/jokes/
// add new joke
router.post("/", addNewJoke); //✅

// GET /api/v1/jokes/
// get all jokes
router.get("/", getAllJokes); //✅

// GET /api/v1/jokes/random
// get a random joke
router.get("/random", getRandomJoke);

// PUT /api/v1/jokes/:id
// update a joke by a give id
router.put("/:id", updateJoke); //✅

// DELETE /api/v1/jokes/:id
// delete a joke by id
router.delete("/:id", deleteJoke); //✅

// GET /api/v1/jokes/:id
// get a joke by id
router.get("/:id", getJoke); //✅

module.exports = router;

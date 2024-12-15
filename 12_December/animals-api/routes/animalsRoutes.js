const express = require("express");
const {
  getAnimal,
  getAllAnimals,
  getRandomAnimal,
} = require("../controllers/animalsController");
const router = express.Router();

router.get("/random", getRandomAnimal);

router.get("/:id", getAnimal);

router.get("/", getAllAnimals);

module.exports = router;

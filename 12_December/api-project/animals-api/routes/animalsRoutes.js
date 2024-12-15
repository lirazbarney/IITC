const express = require("express");
const {
  getAnimal,
  getAllAnimals,
  addNewAnimal,
  updateAnimal,
  deleteAnimal,
} = require("../controllers/animalsController");
const router = express.Router();

// POST /api/v1/animals/
// add new animal
router.post("/", addNewAnimal); //✅

// GET /api/v1/animals/
// get all animals
router.get("/", getAllAnimals); //✅

// PUT /api/v1/animals/:id
// update an animal by a give id
router.put("/:id", updateAnimal); //✅

// DELETE /api/v1/animals/:id
// delete an animal by id
router.delete("/:id", deleteAnimal); //✅

// GET /api/v1/animals/:id
// get an animal by id
router.get("/:id", getAnimal); //✅

module.exports = router;

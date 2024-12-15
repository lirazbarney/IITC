const express = require("express");
const {
  getCar,
  getAllCars,
  addNewCar,
  updateCar,
  deleteCar,
} = require("../controllers/carController.js");
const router = express.Router();

// POST /api/v1/cars/
// add new car
router.post("/", addNewCar); //✅

// GET /api/v1/cars/
// get all cars
router.get("/", getAllCars); //✅

// PUT /api/v1/cars/:id
// update a car by a give id
router.put("/:id", updateCar); //✅

// DELETE /api/v1/cars/:id
// delete a car by id
router.delete("/:id", deleteCar); //✅

// GET /api/v1/cars/:id
// get a car by id
router.get("/:id", getCar); //✅

module.exports = router;

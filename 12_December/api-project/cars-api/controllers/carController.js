const Car = require("../models/Car.model.js");

//GET /api/v1/cars/:id
const getCar = async (req, res) => {
  console.log(req.url, req.method);
  try {
    const { id } = req.params;
    const car = await Car.findById(id);
    if (car) {
      res.send(car);
    } else {
      res.status(404).send("Car couldn't be found");
    }
  } catch (err) {
    res.status(500).send("Error has accrued");
  }
};

//GET /api/v1/cars/
const getAllCars = async (req, res) => {
  console.log(req.url, req.method);
  try {
    const cars = await Car.find();
    res.send(cars);
  } catch (err) {
    res.status(500).send("Error has accrued");
  }
};

//POST /api/v1/cars/
const addNewCar = async (req, res) => {
  console.log(req.url, req.method);
  try {
    const result = await Car.create(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send("Error has accrued");
  }
};

//PUT /api/v1/cars/:id
const updateCar = async (req, res) => {
  console.log(req.url, req.method);
  try {
    const { id } = req.params;
    const car = await Car.findByIdAndUpdate(id, req.body, { new: true });
    if (car) {
      res.send(car);
    } else {
      res.status(404).send("Car couldn't be found");
    }
  } catch (err) {
    res.status(500).send("Error has accrued");
  }
};

//DELETE /api/v1/cars/:id
const deleteCar = async (req, res) => {
  console.log(req.url, req.method);
  try {
    const { id } = req.params;
    const car = await Car.findByIdAndDelete(id);
    if (car) {
      res.send(car);
    } else {
      res.status(404).send("Car couldn't be found");
    }
  } catch (err) {
    res.status(500).send("Error has accrued");
  }
};

module.exports = {
  getCar,
  getAllCars,
  addNewCar,
  updateCar,
  deleteCar,
};

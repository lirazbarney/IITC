const Animal = require("../models/Animal.model.js");

//GET /api/v1/animals/:id
const getAnimal = async (req, res) => {
  console.log(req.url, req.method);
  try {
    const { id } = req.params;
    const animal = await Animal.findById(id);
    if (animal) {
      res.send(animal);
    } else {
      res.status(404).send("Animal couldn't be found");
    }
  } catch (err) {
    res.status(500).send("Error has accrued");
  }
};

//GET /api/v1/animals/
const getAllAnimals = async (req, res) => {
  console.log(req.url, req.method);
  try {
    const animals = await Animal.find();
    res.send(animals);
  } catch (err) {
    res.status(500).send("Error has accrued");
  }
};

//POST /api/v1/animals/
const addNewAnimal = async (req, res) => {
  console.log(req.url, req.method);
  try {
    const result = await Animal.create(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send("Error has accrued");
  }
};

//PUT /api/v1/animals/:id
const updateAnimal = async (req, res) => {
  console.log(req.url, req.method);
  try {
    const { id } = req.params;
    const animal = await Animal.findByIdAndUpdate(id, req.body, { new: true });
    if (animal) {
      res.send(animal);
    } else {
      res.status(404).send("Animal couldn't be found");
    }
  } catch (err) {
    res.status(500).send("Error has accrued");
  }
};

//DELETE /api/v1/animals/:id
const deleteAnimal = async (req, res) => {
  console.log(req.url, req.method);
  try {
    const { id } = req.params;
    const animal = await Animal.findByIdAndDelete(id);
    if (animal) {
      res.send(animal);
    } else {
      res.status(404).send("Animal couldn't be found");
    }
  } catch (err) {
    res.status(500).send("Error has accrued");
  }
};

module.exports = {
  getAnimal,
  getAllAnimals,
  addNewAnimal,
  updateAnimal,
  deleteAnimal,
};

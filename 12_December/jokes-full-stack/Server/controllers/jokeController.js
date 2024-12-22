const Joke = require("../models/Joke.model.js");

//GET /api/v1/jokes/:id
const getJoke = async (req, res) => {
  console.log(req.url, req.method);
  try {
    const { id } = req.params;
    const joke = await Joke.findById(id);
    if (joke) {
      res.send(joke);
    } else {
      res.status(404).send("Joke couldn't be found");
    }
  } catch (err) {
    res.status(500).send("Error has accrued");
  }
};

//GET /api/v1/jokes/
const getAllJokes = async (req, res) => {
  console.log(req.url, req.method);
  try {
    const jokes = await Joke.find();
    res.send(jokes);
  } catch (err) {
    res.status(500).send("Error has accrued");
  }
};

//POST /api/v1/jokes/
const addNewJoke = async (req, res) => {
  console.log(req.url, req.method);
  try {
    const result = await Joke.create(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send("Error has accrued");
  }
};

//PUT /api/v1/jokes/:id
const updateJoke = async (req, res) => {
  console.log(req.url, req.method);
  try {
    const { id } = req.params;
    const joke = await Joke.findByIdAndUpdate(id, req.body, { new: true });
    if (joke) {
      res.send(joke);
    } else {
      res.status(404).send("Joke couldn't be found");
    }
  } catch (err) {
    res.status(500).send("Error has accrued");
  }
};

//DELETE /api/v1/jokes/:id
const deleteJoke = async (req, res) => {
  console.log(req.url, req.method);
  try {
    const { id } = req.params;
    const joke = await Joke.findByIdAndDelete(id);
    if (joke) {
      res.send(joke);
    } else {
      res.status(404).send("Joke couldn't be found");
    }
  } catch (err) {
    res.status(500).send("Error has accrued");
  }
};

const getRandomJoke = async (req, res) => {
  try {
    const count = await Joke.countDocuments();
    const random = Math.floor(Math.random() * count);
    const joke = await Joke.findOne().skip(random);

    res.json(joke);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getJoke,
  getAllJokes,
  addNewJoke,
  updateJoke,
  deleteJoke,
  getRandomJoke,
};

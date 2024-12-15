const animals = [
  { id: 1, name: "Lion" },
  { id: 2, name: "Tiger" },
  { id: 3, name: "Elephant" },
  { id: 4, name: "Giraffe" },
  { id: 5, name: "Zebra" },
];

const getAnimal = (req, res) => {
  const { id } = req.params;
  const animal = animals.find((animal) => animal.id === +id);
  if (animal) {
    res.send(animal);
  }
  res.status(404).send("animal does not exist");
};

const getAllAnimals = (req, res) => {
  res.send(animals);
};

const getRandomAnimal = (req, res) => {
  res.send(animals[Math.floor(Math.random() * animals.length)]);
};

module.exports = {
  getAnimal,
  getAllAnimals,
  getRandomAnimal,
};

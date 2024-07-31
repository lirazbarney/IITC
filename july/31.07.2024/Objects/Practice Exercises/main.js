//task 1
let person = {
  name: `Liraz`,
  age: 23,
  isStudent: false,
};
console.log(`task 1: ${person.name} is ${person.age} y.o.`);
person.isStudent = true;
console.log(`task 1: ${person.name} is a student is ${person.isStudent}`);
console.log(``);

//task 2
let car = {
  make: `toyota`,
  model: `corola`,
  year: 2000,
};
console.log(`task 2: this car is ${car.make} ${car.model}`);
car.year = 2025;
console.log(`task 2: this car is from the year of ${car.year}`);
console.log(``);

//task 3
let fruit = {
  name: `kiwi`,
  color: `green`,
  sweetness: 5,
};
console.log(
  `task 3: fruit name is ${fruit.name} and its sweetness is ${fruit.sweetness} between 1-10`
);
fruit.color = `brown`;
console.log(
  `task 3: fruit name is ${fruit.name} and its color is ${fruit.color}`
);
console.log(``);

//task 4
let book = {
  title: `Harry Potter`,
  author: `J. K. Rowling`,
  pages: 100,
};
console.log(`task 4: ${book.title} was written by ${book.author}`);
book.pages += 50;
console.log(`task 4: ${book.title} has ${book.pages} pages`);
console.log(``);

//task 5
let animal = {
  species: `cat`,
  sound: `meow`,
  isWild: true,
};
console.log(`task 5: the ${animal.species} make a ${animal.sound} sound`);
animal.isWild = false;
console.log(
  `task 5: the ${animal.species} is a wild animal is ${animal.isWild}`
);
console.log(``);

//task 6
let smartphone = {
  brand: `iphone`,
  model: `13 pro`,
  storageGB: 16,
};
console.log(`task 6: the ${smartphone.brand} has ${smartphone.storageGB} GB`);
smartphone.model += ` max`;
console.log(`task 6: the ${smartphone.brand} is ${smartphone.model}`);
console.log(``);

//task 7
let recipe = {
  name: `Hummus`,
  ingredients: [`hummus`, `tahini`, `olive oil`],
  preparationTime: 5,
};
console.log(`task 7: ${recipe.name} includes mostly ${recipe.ingredients[0]}`);
recipe.ingredients.push(`paprika`);
console.log(`task 7: recipe is `);
console.log(recipe);
console.log(``);

//task 8
let movie = {
  title: `deadpool & wolverine`,
  director: `keving faige`,
  releaseYear: 2023,
};
console.log(`task 8: ${movie.title} made by ${movie.director}`);
movie.releaseYear += 1;
console.log(`task 8: ${movie.title} released in ${movie.releaseYear}`);
console.log(``);

//task 9
let country = {
  name: `israel`,
  capital: `Jerusalem`,
  population: 9000000,
};
console.log(`task 9: the capital of ${country.name} is ${country.capital}`);
country.population += 1000000;
console.log(`task 9: `);
console.log(country);
console.log(``);

//task 10
let computer = {
  brand: `apple`,
  cpu: `IDK`,
  ramInGB: 16,
};
console.log(
  `task 10: the ${computer.brand}'s computer has ${computer.cpu} cpu`
);
computer.ramInGB += computer.ramInGB;
console.log(
  `task 10: the ${computer.brand}'s computer has ${computer.ramInGB}`
);

let me = {
  name: `Liraz`,
  lastName: `Bar-Nir`,
  age: 23,
  city: `Rishon LeZion`,
  cats: 2,
};
console.log(me);
console.log(``);

let myComputer = {
  company: `Apple`,
  chip: `M1`,
  color: `gray`,
  screenSize: 13,
  yearBought: 2023,
};
console.log(myComputer);
console.log(``);

let car = {
  make: `toyota`,
  model: `coroloa`,
  year: 2000,
  toString: function () {
    console.log(
      `the ${this.make} ${this.model} was made at year ${this.year} and its color is ${car.color}`
    );
  },
};
console.log(`the car was made at ${car.year}`);
car.year++;
car.color = `blue`;
car.toString();
let carKeys = Object.keys(car);
carKeys.forEach((carKey) => {
  console.log(`${carKey}: ${car[carKey]}`);
});

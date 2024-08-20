const person = {
  name: "liraz",
  age: 23,
  hobbies: [`go to sleep`, `also going to sleep`],
};

const { name, age, hobbies } = person;
// =
const pName = person.name;
const pAge = person.age;
const pHobbies = person.hobbies;

person.hobbies.push(`not waking up`);

console.log(hobbies);
console.log(person.hobbies);
console.log(pHobbies);
console.log(hobbies === person.hobbies);
console.log(pHobbies === person.hobbies);
console.log(hobbies === pHobbies);

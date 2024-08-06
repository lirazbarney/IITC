"use strict";

const student_1 = {
  name: "John",
  age: 17,
  grades: {},
};

const product_1 = {
  name: "Phone",
  categories: ["electronics"],
  isAvailable: false,
};

const myProducts = [
  { name: "Laptop", price: 1000, categories: ["electronics", "computers"] },
  { name: "Shirt", price: 500, categories: ["clothing"] },
  { name: "Phone", price: 4200, categories: ["electronics", "gadgets"] },
];

const students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 19 },
];

const strings = [
  "baba",
  "my success",
  "no more lives",
  "and of session",
  "good discussion",
];

// 😅 Task 1: Update Student Age 😅 ✅✅✅
// TODO: Write a function to update the student's age
// (You can mutate the original object)
function updateAge(student, newAge) {
  student.age = newAge;
}

console.log(`😅 Task 1: Update Student Age 😅`);
console.log(student_1);
updateAge(student_1, 18);
console.log("Updated Student:", student_1);
console.log(``);

// 😅 Task 2: Add Product Category 😅 ✅✅✅
// TODO: Write a function to add a new category to the product
// (You can mutate the original object)

function addCategory(product, category) {
  product.categories.push(category);
}

console.log(`😅 Task 2: Add Product Category 😅`);
console.log(product_1);
addCategory(product_1, "gadgets");
console.log("Updated Product:", product_1);
console.log(``);

// 😅 Task 3: Check Product Availability 😅 ✅✅✅
// TODO: Write a function to check if the product is available
// (return true if available, false otherwise)

function isProductAvailable(product) {
  return product.isAvailable;
}

const isAvailable = isProductAvailable(product_1);
console.log(`😅 Task 3: Check Product Availability 😅`);
console.log("Is Product Available:", isAvailable);
console.log(``);

// 🙂 Task 4: Find Product by Name 🙂 ✅✅✅
// TODO: Write a function to find a product by name

function findProductByName(products, productName) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === productName) {
      return products[i];
    }
  }
}

const foundProduct = findProductByName(myProducts, "Phone");
console.log(`🙂 Task 4: Find Product by Name 🙂`);
console.log("Found Product:", foundProduct);
console.log(``);

// 🙂 Task 5: Count Products in Category 🙂 ✅✅✅
// TODO: Write a function to count the number of products in a category

function countProductsInCategory(products, category) {
  let categoryCounter = 0;
  products.forEach((currentProduct) => {
    for (let i = 0; i < currentProduct.categories.length; i++) {
      categoryCounter += currentProduct.categories[i] === category ? 1 : 0; //if(currentProduct.categories[i] === category) { categoryCounter++ }
    }
  });
  return categoryCounter;
}

const count = countProductsInCategory(myProducts, "electronics");
console.log(`🙂 Task 5: Count Products in Category 🙂`);
console.log("Products in Electronics:", count);
console.log(``);

// 🙂 Task 6: Get Student Ages 🙂 ✅✅✅

// TODO: Write a function to get an array of student ages

function getStudentAges(students) {
  const ages = [];
  students.forEach((currentStud) => {
    if (!ages.includes(currentStud.age)) {
      ages.push(currentStud.age);
    }
  });
  return ages.sort();
}

const ages = getStudentAges(students);
console.log(`🙂 Task 6: Get Student Ages 🙂`);
console.log("Student Ages:", ages);
console.log(``);

// 🤨 Task 7: Get Products by Category 🤨 ✅✅✅
// TODO: Write a function to get products by category

function getProductsByCategory(products, category) {
  const categorizedProducts = {};
  products.forEach((currentProduct) => {
    for (let i = 0; i < currentProduct.categories.length; i++) {
      if (categorizedProducts[currentProduct.categories[i]] === undefined) {
        categorizedProducts[currentProduct.categories[i]] = [];
      }
      categorizedProducts[currentProduct.categories[i]].push(currentProduct);
    }
  });
  return categorizedProducts;
}

const electronics = getProductsByCategory(myProducts, "electronics");
console.log(`🤨 Task 7: Get Products by Category 🤨`);
console.log("Electronics Products:", electronics);
console.log(``);

// 🤨 Task 8: Get Average product prices 🤨 ✅✅✅
// TODO: Write a function to get the average price of all products

function getAveragePrice(products) {
  let avgPrice = 0;
  products.forEach((currentProduct) => {
    avgPrice += currentProduct.price;
  });
  return avgPrice / products.length;
}

const averagePrice = getAveragePrice(myProducts);
console.log(`🤨 Task 8: Get Average product prices 🤨`);
console.log("Average Price:", averagePrice);
console.log(``);

// 🤨 Task 9: Add Grade to Student 🤨 ✅✅✅
// TODO: Write a function to add a grade to a student
// (You can mutate the original object)

function addGrade(student, subject, grade) {
  student.grades = { [subject]: grade };
}

console.log(`🤨 Task 9: Add Grade to Student 🤨`);
console.log(student_1);
addGrade(student_1, "math", 85);
console.log("Updated Student:", student_1);
console.log(``);

// 😥 Task 10: Count Occurrences of a Character 😥 ✅✅✅
// TODO: Write a function to count the occurrences of the character 's'

function countCharacterOccurrences(strings, char) {
  let charCounter = 0;
  strings.forEach((currentStr) => {
    for (let i = 0; i < currentStr.length; i++) {
      charCounter += currentStr[i] === char ? 1 : 0; //if (currentStr[i] === char) { charCounter++ }
    }
  });
  return charCounter;
}

console.log(`😥 Task 10: Count Occurrences of a Character 😥`);
const s_count = countCharacterOccurrences(strings, "s");
const c_count = countCharacterOccurrences(strings, "c");
console.log("Occurrences of 's':", s_count);
console.log("Occurrences of 'c':", c_count);
console.log(``);

// 😥 Task 11: Update Product Price by Name 😥 ✅✅✅
// TODO: Write a function to update the price of a product by name
// (You can mutate the original object)

function updatePriceByName(products, productName, newPrice) {
  products.forEach((currentProduct) => {
    if (currentProduct.name === productName) {
      currentProduct.price = newPrice;
    }
  });
}

console.log(`😥 Task 11: Update Product Price by Name 😥`);
console.log(myProducts);
updatePriceByName(myProducts, "Phone", 550);
console.log("Updated Products:", myProducts);
console.log(``);

// 😥 Task 12: Get Uppercase Strings 😥 ✅✅✅
// TODO: Write a function to get an array of uppercase strings
// (You should return a new array)

function getUppercaseStrings(strings) {
  const upperStrs = [];
  for (let i = 0; i < strings.length; i++) {
    let newWord = ``;
    for (let j = 0; j < strings[i].length; j++) {
      newWord += strings[i][j].toUpperCase();
    }
    upperStrs.push(newWord);
  }
  return upperStrs;
}

const uppercaseStrings = getUppercaseStrings(strings);
console.log(`😥 Task 12: Get Uppercase Strings 😥:`);
console.log("Uppercase Strings:", uppercaseStrings);
console.log(``);

// 🥵 Task 13: group strings by spaces occurrences 🥵 ✅✅✅
// TODO: Write a function to group strings by the number of spaces in the string.
// The function should return an object where keys are the number of
// spaces and values are arrays of strings.

function groupStringsBySpaces(strings) {
  const spaceCounter = {};
  strings.forEach((currentStr) => {
    let counter = 0;
    for (let i = 0; i < currentStr.length; i++) {
      counter += currentStr[i] === ` ` ? 1 : 0; //if (currentWord[i] === 0) { counter++; }
    }
    if (spaceCounter[counter] === undefined) {
      spaceCounter[counter] = [];
    }
    spaceCounter[counter].push(currentStr);
  });
  return spaceCounter;
}

const groupedStrings_1 = groupStringsBySpaces(strings);
console.log(`🥵 Task 13: group strings by spaces occurrences 🥵`);
console.log("Grouped Strings By Spaces:", groupedStrings_1);
console.log(``);

// 🥵 Task 14: group strings by length 🥵 ✅✅✅
//TODO: Write a function to group strings by length.
// The function should return an object where keys are the length of the strings and
// values are arrays of strings.
function groupStringsByLength(strings) {
  const lengthStrings = {};
  strings.forEach((currentStr) => {
    if (lengthStrings[currentStr.length] === undefined) {
      lengthStrings[currentStr.length] = [];
    }
    lengthStrings[currentStr.length].push(currentStr);
  });
  return lengthStrings;
}

const groupedStrings_2 = groupStringsByLength(strings);
console.log(`🥵 Task 14: group strings by length 🥵`);
console.log("Grouped Strings By Length:", groupedStrings_2);
console.log(``);

// 🥵 Task 15: Capitalize Strings 🥵 ✅✅✅
// TODO: Write a function to capitalize the first letter of each string in the array
// (You should return a new array)
// Bonus: Capitalize the first letter of each word in the string (split by space)

function capitalizeStrings(strings) {
  const capitalizeStrings = strings;
  const totalLength = strings.length;
  for (let i = 0; i < totalLength; i++) {
    const words = strings[0].split(` `);
    for (let j = 0; j < words.length; j++) {
      const currentStr = words[j].split(``);
      currentStr[0] = currentStr[0].toUpperCase();
      words[j] = currentStr.join(``);
    }
    capitalizeStrings.push(words.join(` `));
    capitalizeStrings.shift();
  }
  return capitalizeStrings;
}

const capitalizedStrings = capitalizeStrings(strings);
console.log(`🥵 Task 15: Capitalize Strings 🥵`);
console.log("Capitalized Strings:", capitalizedStrings);

"use strict";

let person = {
  name: "John",
  age: 17,
  address: {
    city: "New York",
    zip: "10001",
  },
};

//Write a function to update the person's city
function updateCity(person, newCity) {
  person["address"]["city"] = newCity;
  person.address.city = newCity;
}

console.log("Person:", person);
updateCity(person, "Los Angeles");
console.log("Updated Person:", person);
console.log(``);

/////////////////////////////////////////////////////

let students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 19 },
];

//Write a function to return an array of student names
function getStudentNames(students) {
  let studsNames = [];
  students.forEach((student) => {
    studsNames.push(student["name"]);
  });
  return studsNames;
}

let names = getStudentNames(students);
console.log("Student Names:", names);

//Write a function to find a student by ID
function getStudentById(students, id) {
  let resultStudent = null;
  students.forEach((student) => {
    if (student.id === id) {
      resultStudent = student;
      return;
    }
  });
  return resultStudent;
}

let findStudent = getStudentById(students, 2);
console.log("Found Student:", findStudent);

// Write a function to find a student by ID
function getStudentById2(students, id) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      return students[i];
    }
  }
  return null;
}

let foundStudent = getStudentById2(students, 2);
console.log("Found Student:", foundStudent);

//Write a function to add a new student to the array
function addStudent(students, newStudent) {
  students.push(newStudent);
}

console.log("Students:", students);
addStudent(students, { id: 4, name: "Charlie", age: 19 });
console.log("Updated Students:", students);
console.log(``);

/////////////////////////////////////////////////////

let product = {
  name: "Laptop",
  price: 1200,
  isAvailable: true,
  categories: ["electronics", "computers", "tech"],
};

//Write a function to toggle the product's availability
function toggleAvailability(product) {
  product.isAvailable = !product.isAvailable;
}

console.log("Product:", product);
toggleAvailability(product);
console.log("Updated Product:", product);

//Write a function to update the product's price
function updatePrice(product, newPrice) {
  product.price = newPrice;
}

updatePrice(product, 1500);
console.log("Updated Product:", product);

//Write a function to remove a category from the product
function removeCategory(product, category) {
  let newCategories = [];
  product.categories.forEach((currentCategory) => {
    if (currentCategory != category) {
      newCategories.push(currentCategory);
    }
  });
  product.categories = newCategories;
}
removeCategory(product, "computers");
console.log("Updated Product: :)", product);
console.log(``);

/////////////////////////////////////////////////////

let products = [
  { name: "Laptop", price: 1000, sizes: ["M", "L"], isAvailable: true },
  { name: "Mouse", price: 2500, sizes: ["S", "M"], isAvailable: false },
  { name: "Keyboard", price: 52, sizes: ["L", "XL"], isAvailable: true },
];

//Write a function to find the most expensive product
function findMostExpensiveProduct(products) {
  let mostExpensive = products[0];
  products.forEach((product) => {
    mostExpensive =
      mostExpensive.price < product.price ? product : mostExpensive;
  });
  return mostExpensive;
}

let expensiveProduct = findMostExpensiveProduct(products);
console.log("Most Expensive Product:", expensiveProduct);

//Write a function to return an array of only available product sizes
function getAvailableSizes(products) {
  let isAvailableSizes = [];
  products.forEach((product) => {
    if (product.isAvailable) {
      product.sizes.forEach((size) => {
        isAvailableSizes.push(size);
      });
    }
  });
  let resultArr = [];
  let isDouble = false;
  for (let i = 0; i < isAvailableSizes.length; i++) {
    isDouble = false;
    for (let j = 0; j < resultArr.length; j++) {
      if (isAvailableSizes[i] === resultArr[j]) {
        isDouble = true;
      }
    }
    if (isDouble === false) {
      resultArr.push(isAvailableSizes[i]);
    }
  }
  return resultArr;
}

let sizes = getAvailableSizes(products);
console.log("Available Sizes:", sizes);
console.log(``);

/////////////////////////////////////////////////////

let student = {
  name: "Alice",
  age: 20,
};

//Write a function to add a new property to the student object
function addProperty(student, key, value) {
  student[key] = value;
}

console.log("Student:", student);
addProperty(student, "grade", "A");
console.log("Updated Student:", student);
console.log(``);

/////////////////////////////////////////////////////

let school = {
  name: "Greenwood High",
  address: {
    city: "Springfield",
    zip: "12345",
  },
  students: [
    { id: 1, name: "Alice", grades: { math: 85, english: 78 } },
    { id: 2, name: "Bob", grades: { math: 92, english: 88 } },
  ],
};

//Write a function to update a student's grade in a subject
function updateStudentGrade(school, studentId, subject, newGrade) {
  school.students.forEach((student) => {
    if (student.id === studentId) {
      student.grades[subject] = newGrade;
    }
  });
}

console.log("School:", school);
updateStudentGrade(school, 1, "math", 90);
console.log("Updated School:", school);
console.log(``);

/////////////////////////////////////////////////////

let orders = [
  { id: 1, product: "Laptop", status: "delivered" },
  { id: 2, product: "Mouse", status: "pending" },
  { id: 3, product: "Keyboard", status: "delivered" },
  { id: 4, product: "Monitor", status: "pending" },
  { id: 5, product: "Laptop", status: "shipped" },
];

//Write a function to return an array of only delivered orders
function getDeliveredOrders(orders) {
  let resultArr = [];
  orders.forEach((order) => {
    if (order.status === "delivered") {
      resultArr.push(order);
    }
  });
  return resultArr;
}

let deliveredOrders = getDeliveredOrders(orders);
console.log("Delivered Orders:", deliveredOrders);

//Write a function to count the occurrences of each product in the orders
function countProductOccurrences(orders) {
  let products = {};
  orders.forEach((order) => {
    if (products[order.product] === undefined) {
      products[order.product] = 0;
    }
    products[order.product]++;
  });
  return products;
}

let productCounts = countProductOccurrences(orders);
console.log("Product Counts:", productCounts);
/*
  Output:
  {
    Laptop: 2,
    Mouse: 1,
    Keyboard: 1,
    Monitor: 1
  }
  */

let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let removed = newArr.slice();
console.log(newArr);
console.log(removed);

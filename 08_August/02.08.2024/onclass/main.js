let students = [
  { id: "1", name: "omer", grade: 100 },
  { id: "2", name: "avi", grade: 40 },
  { id: "3", name: "gaga", grade: 80 },
];

//TODO
// write a function that take an array of objects and a key
// return a new array with the values of the given key

function getValuesFromKey(arr, key) {
  let valArr = [];
  arr.forEach((student) => {
    valArr.push(student[key]);
  });
  return valArr;
}
console.log(getValuesFromKey(students, "id"));
console.log(getValuesFromKey(students, "name"));

console.log(``);

//TODO
// write a function that take an array of students
//return a new array with only with grade greater than n

function getPassStudents(studentsArr, grade) {
  let newArr = [];
  studentsArr.forEach((student) => {
    if (student["grade"] > grade) {
      newArr.push(student);
    }
  });
  return newArr;
}
console.log(getPassStudents(students, 70));
console.log(getPassStudents(students, 9));
console.log(getPassStudents(students, 90));

console.log(``);

//TODO
// write a function that takes an array of names
// return a new array with objects that have a "name" key and value

function createPersons(names) {
  let persons = [];
  names.forEach((name) => {
    persons.push({ name: name });
  });
  return persons;
}
console.log(createPersons([`Yossi`, `Liraz`, `Baba`]));

console.log(``);

/* 
  Write a function "groupBy" that takes 
  an array of objects and a key.
  returns an object where each key is a unique value 
  from the employees array and the corresponding value 
  is an array containing the employees that belong to that key.
  Example:
*/

let employees = [
  { name: "John Doe", department: "Engineering", yearsOfExp: 5 },
  { name: "Jane Smith", department: "Marketing", yearsOfExp: 8 },
  { name: "Peter Johnson", department: "Engineering", yearsOfExp: 5 },
  { name: "Lucy Brown", department: "Marketing", yearsOfExp: 10 },
  { name: "Mike Davis", department: "Engineering", yearsOfExp: 3 },
  { name: "Sara Wilson", department: "Marketing", yearsOfExp: 8 },
];

function groupBy(array, key) {
  let group = {};
  array.forEach((element) => {
    let strKey = element[key];
    if (group[strKey] === undefined) {
      group[strKey] = [];
    }
    group[strKey].push(element);
  });
  return group;
}

console.log(groupBy(employees, "department"));

//Write a for loop that counts from 1 to 5 and prints each number.
for (let i = 1; i < 6; i++) {
  console.log(`task 1: ${i}`);
}
console.log(``);

//Create a for loop that counts from 0 to 9 and prints each number.
for (let i = 0; i < 10; i++) {
  console.log(`task 2: ${i}`);
}
console.log(``);

//Write a for loop that counts from 10 to 1 (backwards) and prints each number.
for (let i = 10; i > 0; i--) {
  console.log(`task 3: ${i}`);
}
console.log(``);

//Create a for loop that counts from 1 to 10, but only prints even numbers.
for (let i = 1; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(`task 4: ${i}`);
  }
}
console.log(``);

//Write a for loop that counts from 1 to 10, but only prints odd numbers.
for (let i = 1; i < 11; i++) {
  if (i % 2 === 1) {
    console.log(`task 5: ${i}`);
  }
}
console.log(``);

//Create a for loop that counts from 0 to 15 by 3s (0, 3, 6, 9, 12, 15).
for (let i = 0; i < 16; i += 3) {
  console.log(`task 6: ${i}`);
}
console.log(``);

//Write a for loop that counts from 1 to 20 by 2s (1, 3, 5, ..., 19).
for (let i = 1; i < 20; i += 2) {
  console.log(`task 7: ${i}`);
}
console.log(``);

//Create a for loop that counts from 2 to 20 by 2s (2, 4, 6, ..., 20).
for (let i = 2; i < 21; i += 2) {
  console.log(`task 8: ${i}`);
}
console.log(``);

//Write a for loop that counts from 10 to 0 by 2s (10, 8, 6, ..., 0).
for (let i = 10; i >= 0; i -= 2) {
  console.log(`task 9: ${i}`);
}
console.log(``);

//Create a for loop that counts from 5 to 25 by 5s (5, 10, 15, 20, 25).
for (let i = 5; i < 26; i += 5) {
  console.log(`task 10: ${i}`);
}
console.log(``);

//Write a for loop that prints "*" five times on the same line.
let starLine = ``;
for (let i = 0; i < 5; i++) {
  starLine += `* `;
}
console.log(`task 11: ${starLine}`);
console.log(``);

//Create a for loop that prints "Hello" three times, each on a new line.
for (let i = 0; i < 3; i++) {
  console.log(`task 12: (${i}) Hello`);
}
console.log(``);

//Write a for loop that prints numbers from 1 to 3, each followed by "!".
for (let i = 1; i < 4; i++) {
  console.log(`task 13: ${i}!`);
}
console.log(``);

//Create a for loop that prints "A" to "E" (one letter per iteration).
const aTOe = `ABCDE`;
for (let i = 0; i < aTOe.length; i++) {
  console.log(`task 14: ${aTOe[i]}`);
}
console.log(``);

//Write a for loop that prints "2" four times, separated by spaces.
let numsLine = ``;
for (let i = 0; i < 4; i++) {
  numsLine += `2 `;
}
console.log(`task 15: ${numsLine}`);
console.log(``);

//Given the array `[1, 2, 3, 4, 5]`, write a for loop to print each element.
const taskArrNums = [1, 2, 3, 4, 5];
for (let i = 0; i < taskArrNums.length; i++) {
  console.log(`task 16: ${taskArrNums[i]}`);
}
console.log(``);

//Given the array `['a', 'b', 'c', 'd']`, use a for loop to print each element.
const taskArrChars = [`a`, `b`, `c`, `d`];
for (let i = 0; i < taskArrChars.length; i++) {
  console.log(`task 17: ${taskArrChars[i]}`);
}
console.log(``);

// Write a for loop to print each element of `[10, 20, 30, 40, 50]` backwards.
const numsArr = [10, 20, 30, 40, 50];
for (let i = numsArr.length - 1; i >= 0; i--) {
  console.log(`task 18: ${numsArr[i]}`);
}
console.log(``);

//Use a for loop to print every second element of `[1, 2, 3, 4, 5, 6]`.
const arrNums = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arrNums.length; i += 2) {
  console.log(`task 19: ${arrNums[i]}`);
}
console.log(``);

//Given `['red', 'green', 'blue']`, use a for loop to print "Color: [color]" for each.
const colorsArr = ["red", "green", "blue"];
for (let i = 0; i < colorsArr.length; i++) {
  console.log(`task 20: Color: ${colorsArr[i]}`);
}
console.log(``);

//Write a for loop to calculate the sum of numbers from 1 to 5.
let sum = 0;
for (let i = 1; i < 6; i++) {
  sum += i;
}
console.log(`task 21: ${sum}`);
console.log(``);

//Create a for loop to calculate the product of numbers from 1 to 5.
let product = 1;
for (let i = 1; i < 6; i++) {
  product *= i;
}
console.log(`task 22: ${product}`);
console.log(``);

//Use a for loop to count how many even numbers are in `[1, 2, 3, 4, 5, 6, 7, 8]`.
let evenCount = 0;
const rangeArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < rangeArr.length; i++) {
  evenCount += rangeArr[i] % 2 ? 0 : 1;
}
console.log(`task 23: ${evenCount}`);
console.log(``);

//Write a for loop to find the largest number in `[10, 5, 8, 12, 3]`.
const findMaxArr = [10, 5, 8, 12, 3];
let maxNum = findMaxArr[0];
for (let i = 1; i < findMaxArr.length; i++) {
  maxNum = findMaxArr[i] > maxNum ? findMaxArr[i] : maxNum;
}
console.log(`task 24: ${maxNum}`);
console.log(``);

//Use a for loop to calculate the sum of even numbers from 1 to 10.
let evenSum = 0;
for (let i = 1; i < 11; i++) {
  evenSum += i % 2 ? 0 : i;
}
console.log(`task 25: ${evenSum}`);
console.log(``);

//Write nested for loops to create this pattern: right triangle of *
let starTriangleLine = ``;
for (let i = 1; i < 4; i++) {
  starTriangleLine = ``;
  for (let j = 1; j <= i; j++) {
    starTriangleLine += `*`;
  }
  console.log(`task 26: ${starTriangleLine}`);
}
console.log(``);

//Create nested for loops to print a 3x3 grid of asterisks.
let starGridLine;
for (let i = 0; i < 3; i++) {
  starGridLine = ``;
  for (let j = 0; j < 3; j++) {
    starGridLine += `* `;
  }
  console.log(`task 27: (${i}) ${starGridLine}`);
}
console.log(``);

//Use nested for loops to create this number pattern: 1 12 123
let numsTriangleLine;
for (let i = 1; i < 4; i++) {
  numsTriangleLine = ``;
  for (let j = 1; j <= i; j++) {
    numsTriangleLine += j;
  }
  console.log(`task 28: ${numsTriangleLine}`);
}
console.log(``);

//Write nested for loops to create a 4x4 multiplication table.
let multiplyLine;
for (let i = 1; i < 5; i++) {
  multiplyLine = ``;
  for (let j = 1; j < 5; j++) {
    multiplyLine += `${i * j} `;
  }
  console.log(`task 29: ${multiplyLine}`);
}
console.log(``);

//Create nested for loops to print this pattern: 1 22 333
let numIncreasingLine;
for (let i = 1; i < 4; i++) {
  numIncreasingLine = ``;
  for (let j = 1; j <= i; j++) {
    numIncreasingLine += i;
  }
  console.log(`task 30: ${numIncreasingLine}`);
}

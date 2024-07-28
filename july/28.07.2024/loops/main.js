//class hw
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//1. write a loop that counts from 10 to 1 backwards
for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log(``);

//2. create a loop that prints only even numbers from 2 to 20
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
console.log(``);

//3. make a loop that adds up all numbers from 1 to 10 and prints the sum
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(`${sum}
    `);

//4. write a loop that prints the 5 times table
for (let i = 5; i <= 50; i += 5) {
    console.log(i);
}
console.log(``);

//5. create the * pyramid
for (let i = 1; i <= 5; i++) {
    console.log(`*`.repeat(i));
}

//1. write a while loop that prints numbers from 1 to 10
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
console.log(``);
//2. create a while loop that doubles a number until its bigger than 100
let number = 1;
while (number *  2 < 100) {
    number *= 2;
    console.log(`number is ${number}`);
}
console.log(``);

//3. make a while loop that counts down 20 to 0
number = 20;
while (number >= 0) {
    console.log(i);
    i--;
}
console.log(``);

//4. write a while loop that keeps asking for a password until the correct one is entered
let password = `1234`;
let insertedPassWord;
while ( insertedPassWord !== password) {
    insertedPassWord = prompt(`what is the passwword`, ``);
}
console.log(``);

//5. create a while loop that generate random numbers between 1 and 10 until it gets a 5
while (number !== 5) {
    number = getRandomInt(1, 10);
}
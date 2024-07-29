// //class hw
// //for
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//1. write a loop that counts from 10 to 1 backwards
console.log(`task 1`);
for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log(``);

//2. create a loop that prints only even numbers from 2 to 20
console.log(`task 2`);
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
console.log(``);

//3. make a loop that adds up all numbers from 1 to 10 and prints the sum
console.log(`task 3`);
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(`${sum}
    `);

//4. write a loop that prints the 5 times table
console.log(`task 4`);
for (let i = 5; i <= 50; i += 5) {
    console.log(i);
}
console.log(``);

//5. create the * pyramid
console.log(`task 5`);
for (let i = 1; i <= 5; i++) {
    console.log(`*`.repeat(i));
}
console.log(``);
// -------------------------------------------------------------------------

//while
//1. write a while loop that prints numbers from 1 to 10
let i = 1;
console.log(`task 1`);
while (i <= 10) {
    console.log(i);
    i++;
}
console.log(``);

//2. create a while loop that doubles a number until its bigger than 100
number = 1;
console.log(`task 2`);
while (number *  2 < 100) {
    number *= 2;
    console.log(`number is ${number}`);
}
console.log(``);

//3. make a while loop that counts down 20 to 0
console.log(`task 3`);
number = 20;
while (number >= 0) {
    console.log(number);
    number--;
}
console.log(``);

//4. write a while loop that keeps asking for a password until the correct one is entered
console.log(`task 4`);
let password = `1234`;
let insertedPassWord = ``;
while (insertedPassWord !== password) {
    insertedPassWord = prompt(`what is the password`, ``);
}
console.log(``);

//5. create a while loop that generate random numbers between 1 and 10 until it gets a 5
console.log(`task 5`);
while (number !== 5) {
    number = getRandomInt(1, 10);
    console.log(number);
}
console.log(``);
// -------------------------------------------------------------------------

//do while
//1. write a do while loop that prints numbers from 1 to 5
let number = 1;
console.log(`task 1`);
do {
    console.log(number);
    number++
} while (number <= 5);
console.log(``);

//2. create a do while loop that asks the user if they want to play again
let answer = ``;
do {
    console.log(`task 2`);
    answer = prompt(`do you want to build a snow man again`, `enter "yes" for keep playing`)
} while (answer === `yes`);
console.log(``);

//3. make a do while loop thats rolls a die (1-6) until it gets 6
console.log(`task 3`);
number = 0;
do {
    number = getRandomInt(1, 7);
    console.log(number);
} while (number !== 6);
console.log(``);

//4. write a do while loop that keeps doubling number until its its over 1000
number = 1;
console.log(`task 4`);
do {
    number *= 2;
    console.log(number);
} while (number < 1000);
console.log(``);

//5. create a do while loop thats asks for names and adds them to a list until the user enter `done`
let newName = ``;
let names = ``;
console.log(`task 5`);
do {
    newName = prompt(`enter your name`, `write "done" to finish`);
    names += newName;
    console.log( names);
} while (newName !== `done`);
console.log(``);


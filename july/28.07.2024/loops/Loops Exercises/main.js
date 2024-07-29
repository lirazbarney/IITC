function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//task 1
console.log(`task 1: `);
for (let i = 1; i < 21; i++) {
    console.log(i);
}

//task 2
console.log(`task 2: `);
let i = 1;
while (i < 16) {
    console.log(i);
    i += 2;
}

//task 3
let number;
do {
    number = Number(prompt(`please enter a valid number between 1-10`, ``));
} while ((isNaN(number)) || (number > 10) || (number < 1));
console.log(`task 3: ${number}`);


//task 4
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(`task 4: ${sum}`);

//task 5
console.log(`task 5: `);
i = 10;
while (i > 0) {
    console.log(i);
    i--;
}
console.log(`Blast off!`);

//task 6
console.log(`task 6: `);
let last = 0;
let current = 1;
let temp;
for (let i = 0; i < 10; i++) {
    console.log(`${i + 1}: ${current}`);
    // temp = current;
    // current += last;
    // last = temp;
    [last, current] = [current, last + current];
}

//task 7
console.log(`task 7: `);
do {
    number = getRandomInt(1, 6);
    console.log(number);
} while (number !== 3);

//task 8
console.log(`task 8: `);
for (let i = 7; i <= 70; i += 7) {
    console.log(`7*${i/7}=${i}`);
}

//task 9
number = 1000;
while (((number % 3) !== 0) || ((number % 7) !== 0)) {
    number++;
}
console.log(`task 9: ${number}`);

//task 10
let factorialNum = 4;
let product = 1;
for (let i = 1; i <= factorialNum; i++) {
    product *= i;
}
console.log(`task 10: ${product}`);

//task 11
console.log(`task 11: `);
number = 1;
let inputNumber;
do {
    inputNumber = parseInt(prompt(`guess my number`, ``));
    if (inputNumber > number) {
        console.log(`${inputNumber} go lower`);
    } else if (inputNumber < number) {
        console.log(`${inputNumber} go higher`);
    } else {
        console.log(`${inputNumber}you nailed it`);
    }
} while (inputNumber !== number);

//task 12
number = 13;
let isPrime = true;
for (let i = 2; i < Math.sqrt(number); i ++) {
    if ((number % i) === 0) {
        isPrime = false;
    }
}
console.log(`task 12: ${number} is prime - ${isPrime}`);

//task 13
number = 16;
let binaryNumber = ``;
let reminder;
while (number > 0) {
    reminder = number % 2;
    if (reminder === 0) {
        binaryNumber = `0` + binaryNumber;
    } else {
        binaryNumber = `1` + binaryNumber
    }
    number = Math.floor(number / 2);
}
console.log(`task 13: 13 is ${binaryNumber}`);

//task 14
console.log(`task 14: `);
for (let i = 1; i <= 5; i++) {
    console.log(String(i).repeat(i));
}

//task 15
console.log(`task 15: `);

//task 16
console.log(`task 16: `);

//task 17
console.log(`task 17: `);

//task 18
console.log(`task 18: `);

//task 19
console.log(`task 19: `);

//task 20
console.log(`task 20: `);

//task 21
number = 15;
sum = 1;
i = 1;
while (sum < 15) {
    i++;
    sum += i;
}
console.log(`task 21: for number 15 the answer is ${i}`);

//task 22
console.log(`task 22: `);

//task 23
console.log(`task 23: `);

//task 24
console.log(`task 24: `);

//task 25
console.log(`task 25: `);


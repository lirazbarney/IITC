function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//task 1
for (let i = 1; i < 21; i++) {
    console.log(`task 1: ${i}`);
}
console.log(``);

//task 2
let i = 1;
while (i < 16) {
    console.log(`task 2: ${i}`);
    i += 2;
}
console.log(``);

//task 3
let number;
do {
    number = Number(prompt(`please enter a valid number between 1-10`, ``));
} while ((isNaN(number)) || (number > 10) || (number < 1));
console.log(`task 3: ${number}`);
console.log(``);

//task 4
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(`task 4: ${sum}`);
console.log(``);

//task 5
i = 10;
while (i > 0) {
    console.log(`task 5: ${i}`);
    i--;
}
console.log(`task 5: Blast off!`);
console.log(``);

//task 6
let last = 0;
let current = 1;
let temp;
for (let i = 0; i < 10; i++) {
    console.log(`task 6: ${i + 1}: ${current}`);
    // temp = current;
    // current += last;
    // last = temp;
    [last, current] = [current, last + current];
}
console.log(``);


//task 7
console.log(`task 7: `);
do {
    number = getRandomInt(1, 6);
    console.log(number);
} while (number !== 3);
console.log(``);

//task 8
for (let i = 7; i <= 70; i += 7) {
    console.log(`task 8: 7*${i/7}=${i}`);
}
console.log(``);

//task 9
number = 1000;
while (((number % 3) !== 0) || ((number % 7) !== 0)) {
    number++;
}
console.log(`task 9: ${number}`);
console.log(``);

//task 10
let factorialNum = 4;
let product = 1;
for (let i = 1; i <= factorialNum; i++) {
    product *= i;
}
console.log(`task 10: ${product}`);
console.log(``);

//task 11
number = getRandomInt(1, 20);
let inputNumber;
do {
    inputNumber = parseInt(prompt(`guess my number - ${number}`, ``));
    if (inputNumber > number) {
        console.log(`task 11: ${inputNumber} go lower, ${number}`);
    } else if (inputNumber < number) {
        console.log(`task 11: ${inputNumber} go higher, ${number}`);
    } else {
        console.log(`task 11: ${inputNumber}you nailed it, ${number}`);
    }
} while (inputNumber !== number);
console.log(``);

//task 12
number = 13;
let isPrime = true;
for (let i = 2; i < Math.sqrt(number); i ++) {
    if ((number % i) === 0) {
        isPrime = false;
    }
}
console.log(`task 12: ${number} is prime - ${isPrime}`);
console.log(``);

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
console.log(``);

//task 14
console.log(`task 14: `);
for (let i = 1; i <= 5; i++) {
    console.log(String(i).repeat(i));
}
console.log(``);

//task 15
let num1, num2;
do {
    num1 = parseInt(prompt(`what is the first number you want?`, ``));
    num2 = parseInt(prompt(`what is the second number you want?`, ``));
    switch(prompt(`what is the operation you want to use`, `(+, -, *, /)`)) {
        case `+`:
            console.log(`task 15: ${num1} + ${num2} = ${num1 + num2}`);
            break;
        case `-`:
            console.log(`task 15: ${num1} - ${num2} = ${num1 - num2}`);
            break;
        case `*`:
            console.log(`task 15: ${num1} * ${num2} = ${num1 * num2}`);
            break;
        case `/`:
            if (num2 === 0) {
                console.log(`task 15: result is invalid. cant divide by 0`);
            } else {
                console.log(`task 15: ${num1} / ${num2} = ${num1 / num2}`);
            }
            break;
        default:
            console.log(`task 15: invalid operation`);
    }
} while (prompt(`do you want to keep playing? write "no" to finish`, `no`) !== `no`);
console.log(``);

//task 16
let a = 20, b = 100;
let gcd;
for (; (a !== 0) && (b !== 0); ) {
    if (a > b) {
        a = (a % b);
    } else {
        b = (b % a);
    }
}
gcd = a === 0 ? b : a;
console.log(`task 16: ${gcd}`);
console.log(``);

//task 17
const lowerA = 97, upperA = 65;
const lowerZ = 122, upperZ = 90;
let str = `Hello, World!`, shifting = -4, newStr = ``;
let asciiCode;
i = 0;
while (i < str.length) {
    asciiCode = str[i].charCodeAt(0);
    if (((asciiCode >= lowerA) && (asciiCode <= lowerZ)) || ((asciiCode >= upperA) && (asciiCode <= upperZ))) {
        asciiCode += shifting;
        if (shifting > 0) {
            if (((asciiCode > upperZ) && (asciiCode < lowerA)) || (asciiCode > lowerZ)) {
                asciiCode -= 26;
            }
        } else {
            if (((asciiCode > upperZ) && (asciiCode < lowerA)) || (asciiCode < upperA)) {
                asciiCode += 26;
            }
        }
    }
    newStr += String.fromCharCode(asciiCode);
    i++;
}
console.log(`task 17: ${newStr}`);
console.log(``);

//task 18
let n = 10;
for (let i = 1; i <= n; i++) {
    console.log(`task 18: 2^${i} = ${Math.pow(2, i)}`);
}
console.log(``);

//task 19
let timesInRow = 0;
let coinFlipping;
do {
    //0 is tails; 1 is heads
    coinFlipping = getRandomInt(0, 1);
    console.log(`task 19: ${(coinFlipping === 0) ? `tails` : `heads`}`);
    if (coinFlipping === 1) {
        timesInRow++;
    } else {
        timesInRow = 0;
    }
} while (timesInRow !== 3);
console.log(``);

//task 20
n = 5;
sum = 0;
for (let i = 1; i <= n; i++) {
    sum += (i * i);
}
console.log(`task 20: ${sum}`);
console.log(``);

//task 21
number = 15;
sum = 1;
i = 1;
while (sum < 15) {
    i++;
    sum += i;
}
console.log(`task 21: for number 15 the answer is ${i}`);
console.log(``);


//task 22
console.log(`task 22:`);
n = 10;
let max = (n * 2) - 1;
let count = 1, sign = 2;
str;
for (let i = 0; i < max; i++) {
    str = ``;
    str += ` `.repeat((max - count) / 2);
    str += `*`.repeat(count);
    str += ` `.repeat((max - count) / 2);
    console.log(str);
    if (i === (n - 1)) {
        sign = -2;
    }
    count += sign;
}
console.log(``);


//task 23
number = 6;
let guessedNumber;
let min = 1;
max = 100;
do {
    guessedNumber = getRandomInt(min, max);
    console.log(`task 23: ${guessedNumber} =?= 6. min is ${min} and max is ${max}`);
    if (guessedNumber > number) {
        max = guessedNumber -1;
    } else {
        min = guessedNumber + 1;
    }
} while (guessedNumber !== number);
console.log(``);

//task 24
n = 3;
sum = 0;
number = 1;
for (let i = 1; i <= n; i++) {
    sum += (number / i);
    number *= -1;
}
console.log(`task 24: ${sum}`);
console.log(``);

//task 25
number  = 6;
console.log(`task 25: ${number}`);
while (number !== 1) {
    if((number % 2 ) === 0) {
        number /= 2;
    } else {
        number = number * 3 + 1;
    }
    console.log(`task 25: ${number}`);
}


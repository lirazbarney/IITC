//loops
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function evenFiltering(number) {
    return (number % 2) === 0;
}
function addGreeting(name) {
    return `hello ${name}`;
}
function isPositive(number) {
    return number > 0;
}
function greaterThan10(number) {
    return number > 10;
}
function isBanana(fruit) {
    return fruit === `Banana`;
}
function getProduct(params) {
    
}

//task 1
let fruits = [`apples`, `bananas`, `coconuts`];
console.log(`task 1: my fav fruits are ${fruits}`);

//task 2
fruits.push(`dragon fruits`);
console.log(`task 2: my new fav fruits are ${fruits}`);

//task 3
let lastFruit = fruits.pop();
console.log(`task 3: my updated fav fruits are ${fruits}. i don't like ${lastFruit} no more`);

//task 4
let numbers = [1, 2, 3, 4, 5];
console.log(`task 4: the third number is ${numbers[2]}`);

//task 5
fruits[1] = `kiwi`;
console.log(`task 5: now, my fav fruits are ${fruits}`);

//task 6
let colors = [];
colors.push(`red`, `green`, `blue`);
console.log(`task 6: the colors are ${colors}`);

//task 7
let color = colors.shift();
console.log(`task 7: the colors are now ${colors} without ${color}`);

//task 8
colors.unshift(`yellow`);
console.log(`task 8: the new colors are ${colors}`);

//task 9
let sum = 0;
for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(`task 9: the sum of ${numbers} is ${sum}`);

//task 10
console.log(`task 10: green is at index ${colors.indexOf(`green`)}`);

//task 11
let randomNumbers = [];
for (let i = 0; i < 5; i++) {
    randomNumbers.push(getRandomInt(-1, 15))
}
let max = randomNumbers [0];
for (let i = 1; i < randomNumbers.length; i++) {
    if (randomNumbers[i] > max) {
        max = randomNumbers[i]
    }
}
console.log(`task 11: the largest number among ${randomNumbers} is ${max}`);

//task 12
let newFruits = fruits.slice(1, 3);
console.log(`task 12: my best fav fruits are ${newFruits}`);

//task 13
let evenNumbers = numbers.filter(evenFiltering);
console.log(`task 13: the numbers are ${numbers} but the even numbers are ${evenNumbers}`);

//task 14
let colorsStr = colors.join(`, `);
console.log(`task 14: my colors are ${colorsStr}`);

//task 15
let newNumbers = numbers.concat(randomNumbers);
console.log(`task 15: the numbers are ${numbers}, the random numbers are ${randomNumbers} and the concocted numbers array is ${newNumbers}`);

//task 16
fruits.reverse();
console.log(`task 16: my new order of fav fruits are ${fruits}`);

//task 17
let names = [`liraz`, `josef`, `daniel`];
let greetNames = names.map(addGreeting);
console.log(`task 17: the names are ${names}, the mapped names are ${greetNames}`);

//task 18
console.log(`task 18: all the numbers in numbers are ${randomNumbers.every(isPositive)}`);

//task 19
console.log(`task 19: the first number grater than 10 is ${randomNumbers.find(greaterThan10)}`);

//task 20
console.log(`task 20: i have a banana in my fruits is ${fruits.some(isBanana)}`);

//task 21
console.log(`task 21: `);
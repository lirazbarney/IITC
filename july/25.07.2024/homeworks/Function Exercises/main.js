//Function Exercises
//task 1
function greet() {
    console.log(`   Hello, World!`);
}
console.log(`task 1:`);
greet();

//task 2
function square(number) {
    return (number * number);
}
console.log(`task 2: ${square(4)}`);

//task 3
function isEven(number) {
    return ((number % 2) === 0);
}
console.log(`task 3: ${isEven(4)}`);

//task 4
function getFullName(firstName, lastName) {
    return (firstName + ` ` + lastName)
}
console.log(`task 4: ${getFullName(`Liraz`, `Bar-Nir`)}`);

//task 5
function sumTwo(a, b) {
    return (a + b);
}
console.log(`task 5: ${sumTwo(10, 3)}`);

//task 6
function multiply(a, b) {
    return (a * b);
}
console.log(`task 6: ${multiply(2, 4)}`);

//task 7
function greetPerson(name) {
    return (`hello, ` + name);
}
console.log(`task 7: ${greetPerson(`Liraz`)}`);

//task 8
function getAbsoluteValue(number) {
    if (number < 0) {
        return (-number);
    } else {
        return number;
    }
}
console.log(`task 8: ${getAbsoluteValue(-9)}`);

//task 9
function calculateAverage(a, b) {
    return (sumTwo(a, b) / 2);
}
console.log(`task 9: ${calculateAverage(8, 4)}`);

//task 10
function convertToUppercase(str) {
    return str.toUpperCase();
}
console.log(`task 10: ${convertToUppercase(`hello, world!`)}`);

//task 11
function isPositive(number) {
    return (number >= 0);
}
console.log(`task 11: ${isPositive(-5)}`);

//task 12
function getFirstChar(str) {
    return str[0];
}
console.log(`task 12: ${getFirstChar(`Hello, World!`)}`);

//task 13
function areaOfRectangle(width, height) {
    return multiply(width, height);
}
console.log(`task 13: ${areaOfRectangle(3, 5)}`);

//task 14
function remainderDivision(number, divider) {
    return number % divider;
}
console.log(`task 14: ${remainderDivision(4, 3)}`);

//task 15
function logType(value) {
    console.log(`   ${typeof(value)}`);
}
console.log(`task 15:`);
logType(true);

//task 16
function invertBoolean(bool) {
    return !bool;
}
console.log(`task 16: ${invertBoolean(false)}`);

//task 17
function concatenateStrings(str1, str2) {
    return (str1 + str2);
}
console.log(`task 17: ${concatenateStrings(`Hello,`, `world!`)}`);

//task 18
function findSmaller(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log(`task 18: ${findSmaller(3, 1)}`);

//task 19
function greetWithDefault(name) {
    if (name) {
        return (`Hello, ` + name);
    } else {
        return `Hello, Guest`;
    }
}
console.log(`task 19: ${greetWithDefault(``)}`);

//task 20
function isLongString(str) {
    return (str.length > 10);
}
console.log(`task 20: ${isLongString(`abc`)}`);


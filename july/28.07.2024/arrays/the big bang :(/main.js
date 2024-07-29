console.log(`:(`);

//task 1
let fruits = [];
console.log(`task 1: fruits is ${fruits}`);

//task 2
let numbers = [1, 2, 3, 4, 5];
console.log(`task 2: numbers is ${numbers}`);

//task 3
let colors = [`red`, `green`, `blue`];
console.log(`task 3: colors is ${colors}`);

//task 4
let mixed = [1, `1`, true];
console.log(`task 4: mixed is ${mixed}. why js. why not error?`);

//task 5
let seasons = [`Spring`, `Summer`, `Fall`, `Winter`];
console.log(`task 5: seasons is ${seasons}`);

// -----------------------------------------------------------------------------------------------------------------------

//task 6
console.log(`task 6: number.length is ${numbers.length}`);

//task 7
let emptyCheck = [];
console.log(`task 7: ${emptyCheck.length === 0 ? `emptyCheck is empty` : `emptyCheck is somehow not empty`}`);

//task 8
let dynamic = [1, 2, 3, 4, 5];
console.log(`task 8: dynamic.length is ${dynamic.length}`);

//task 9
dynamic.push(6);
console.log(`task 9: dynamic.length is ${dynamic.length}`);

//task 10
dynamic.pop();
console.log(`task 10: dynamic.length is ${dynamic.length}`);

// -----------------------------------------------------------------------------------------------------------------------


//task 11
console.log(`task 11: colors[0] is ${colors[0]}`);

//task 12
console.log(`task 12: seasons[seasons.length - 1] is ${seasons[seasons.length - 1]}`);

//task 13
console.log(`task 13: number[Math.floor(number.length / 2)] is ${numbers[Math.floor(numbers.length / 2)]}`);

//task 14
console.log(`task 14: fruits[0] is ${fruits[0]}`);

//task 15
console.log(`task 15: The second color is ${colors[1]}`);

// -----------------------------------------------------------------------------------------------------------------------

//task 16
fruits[0] = `apple`;
console.log(`task 16: fruits is ${fruits}`);

//task 17
numbers[numbers.length - 1] = 10;
console.log(`task 17: numbers is ${numbers}`);

//task 18
numbers[2] *= 2;
console.log(`task 18: numbers is ${numbers}`);

//task 19
for (let i = 0; i < colors.length; i++) {
    colors[i] = colors[i].toUpperCase();
}
console.log(`task 19: colors is ${colors}`);

//task 20
[seasons[0], seasons[seasons.length - 1]] = [seasons[seasons.length - 1], seasons[0]];
console.log(`task 20: seasons is ${seasons}`);

// -----------------------------------------------------------------------------------------------------------------------

//task 21
fruits.push(`orange`);
console.log(`task 21: fruits is ${fruits}`);

//task 22
console.log(`task 22: last element in numbers is ${numbers.pop()}; numbers is ${numbers} `);

//task 23
colors.push(`WHITE`, `BROWN`, `BLACK`);
console.log(`task 23: colors ${colors}`);

//task 24
for (let i = 1; i < 6; i++) {
    emptyCheck.push(i);
}
console.log(`task 24: emptyCheck is ${emptyCheck}`);

//task 25
while (emptyCheck.length > 0) {
    console.log(`task 25: ${emptyCheck.pop()} removed from emptyCheck`);
}
console.log(`task 25: emptyCheck is ${emptyCheck}`);

// -----------------------------------------------------------------------------------------------------------------------

//task 26
fruits.unshift(`mango`);
console.log(`task 26: fruits is ${fruits}`);

//task 27
console.log(`task 27: ${numbers.shift()} removed from numbers; number is ${numbers}`);

//task 28
numbers.unshift(-1, 0, 1);
console.log(`task 28: numbers is ${numbers}`);

//task 29
for (let i = 5; i > 0; i--) {
    emptyCheck.unshift(i);
}
console.log(`task 29: emptyCheck is ${emptyCheck}`);

//task 30
while (emptyCheck.length > 0) {
    console.log(`task 30: ${emptyCheck.shift()} removed from emptyCheck`);
}
console.log(`task 30: emptyCheck is ${emptyCheck}`);

// -----------------------------------------------------------------------------------------------------------------------

//task 31
console.log(`task 31: GREEN is at ${colors.indexOf(`GREEN`)} in colors`);

//task 32
console.log(`task 32: ${(seasons.indexOf(`Winter`) === -1) ? `Winter is not inside seasons` : `Winter is one of the seasons`}`);

//task 33
colors.push(`RED`);
console.log(`task 33: last index of red is ${colors.lastIndexOf(`RED`)}`);

//task 34
let duplicatedVals = [1, 2, 1, 3, 1, 2];
console.log(`task 34: first index of 1 in duplicatedVals (${duplicatedVals}) is ${duplicatedVals.indexOf(1)} and the last index of 1 is ${duplicatedVals.lastIndexOf(1)}`);

//task 35
console.log(`task 35: does 4 isn't duplicatedVals? ${duplicatedVals.indexOf(4) === -1}`);

// -----------------------------------------------------------------------------------------------------------------------

//task 36
console.log(`task 36: fruits includes "apple" is ${fruits.includes(`apple`)}`);

//task 37
console.log(`task 37: numbers include 10 is ${numbers.includes(10)}`);

//task 38
console.log(`task 38: colors include "blue" in the second half of the array is ${colors.includes(`BLUE`, Math.floor(colors.length / 2))}`);

//task 39
function doesInclude(arr, val) {
    return arr.includes(val);
}
console.log(`task 39: colors include "blue" is ${doesInclude(colors, `BLUE`)}`);

//task 40
console.log(`task 40: ${(seasons.includes(`Autumn`)) ? `seasons include "Autumn", and probably don't include "Fall"` : `seasons don't include "Autumn" and probably include "Fall"`}`);

// -----------------------------------------------------------------------------------------------------------------------

//task 41
console.log(`task 41: first 3 number of ${numbers} are ${numbers.slice(0, 3)}`);

//task 42
console.log(`task 42: last 2 colors of ${colors} are ${colors.slice(-2)}`);

//task 43
console.log(`task 43: the 2nd-3rd seasons of ${seasons} are ${seasons.slice(1, 3)}`);

//task 44
emptyCheck = numbers.slice();
console.log(`task 44: numbers is ${numbers} and emptyCheck is ${emptyCheck}`);

//task 45
console.log(`task 45: the middle numbers of ${numbers} are ${numbers.slice(Math.floor(numbers.length / 3), Math.floor(numbers.length * 2 / 3))}`);

// -----------------------------------------------------------------------------------------------------------------------

//task 46
fruits.splice(Math.floor(fruits.length / 2), 2);
console.log(`task 46: fruits is ${fruits}`);

//task 47
numbers.splice(0, 1, -3, -2);
console.log(`task 47: number is ${numbers}`);

//task 48
colors.splice(Math.floor(colors.length / 2), 0, `white`, `brown`, `black`);
console.log(`task 48: colors is ${colors}`);

//task 49
numbers.splice(0, 1, -5, -4);
console.log(`task 49: number is ${numbers}`);

//task 50
emptyCheck.splice(0, emptyCheck.length)
console.log(`task 50: emptyCheck is ${emptyCheck}`);

// -----------------------------------------------------------------------------------------------------------------------

//task 51
emptyCheck = fruits.concat(colors);
console.log(`task 51: emptyCheck is ${emptyCheck}`);

//task 52
emptyCheck = numbers.concat(fruits).concat(colors);
console.log(`task 52: emptyCheck is ${emptyCheck}`);

//task 53
emptyCheck = fruits.concat(`apple`);
console.log(`task 53: emptyCheck is ${emptyCheck}`);

//task 54
console.log(`task 54: emptyCheck is ${emptyCheck.concat(emptyCheck)}`);

//task 55
emptyCheck = fruits;
emptyCheck = emptyCheck.concat(numbers);
emptyCheck = emptyCheck.concat(seasons);
console.log(`task 55: emptyCheck is ${emptyCheck}`);

// -----------------------------------------------------------------------------------------------------------------------

//task 56
fruits.push(`apple`, `banana`);
fruits = fruits.join();
console.log(`task 56: fruits is ${fruits}`);
fruits = fruits.split(`,`);

//task 57
console.log(`task 57: number is ${numbers.join(`-`)}`);

//task 58
function seperateJoin(arr, sep) {
    return arr.join(sep);
}
console.log(`task 58: number is ${seperateJoin(numbers, `&`)}`);

//task 59
console.log(`task 59: numbers is ${numbers.join(``)}`);

//task 60
let sentence = `hello world my name is liraz`
console.log(`task 60: sentence is ${sentence.split(` `).reverse().join(` `)}`);

// -----------------------------------------------------------------------------------------------------------------------

//task 61
seasons.reverse();
console.log(`task 61: seasons is ${seasons}`);

//task 62
console.log(`task 62: poop is palindrome is ${`poop`.split(``).reverse().join(``) === `poop`}`);

//task 63
function sqrNumbers(num) {
    return num * num;
}
numbers.reverse();
numbers = numbers.map(sqrNumbers);
console.log(`task 63: numbers is ${numbers}`);

//task 64
console.log(`task 64: snake upside down is ${(`snake`.split(``).reverse().join(``))}`);

//task 65
function reverseArr(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
    }
    return arr;
}
console.log(`task 65: [1, 2, 3, 4, 5, 6, 7] reversed is ${reverseArr([1, 2, 3, 4, 5, 6, 7])}`);

// -----------------------------------------------------------------------------------------------------------------------

//task 66
fruits.sort();
console.log(`task 66: fruits is ${fruits}`);

//task 67
function sortingNumbers(a, b) {
    return (a > b);
}
for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 14)) - 5;
}
console.log(`task 67: numbers is ${numbers}. sorted numbers is ${numbers.sort(sortingNumbers)}`);

//task 68
function anotherSortingNumber(a, b) {
    return (a < b);
}
console.log(`task 68: numbers is ${numbers}. unsorted numbers is ${numbers.sort(anotherSortingNumber)}`);

//task 69
function lengthSorting(w1, w2) {
    return (w1.length > w2.length);
}
console.log(`task 69: ["hello", "world", "abc", "my", "name", "is", "abarabakadbra] sorted by length is ${["hello", "world", "abc", "my", "name", "is", "abarabakadbra"].sort(lengthSorting)}`);

//task 70
function threeReminderSorting(a, b) {
    return ((a % 3) > (b % 3));
}
console.log(`task 70: numbers is ${numbers.sort(threeReminderSorting)}`);

// -----------------------------------------------------------------------------------------------------------------------

//task 71
colors.forEach(color => {
    console.log(`task 71: ${color}`);
});

//task 72
let doubleNumbers = [];
numbers.forEach(num => {
    doubleNumbers.push(num * 2);
});
numbers = doubleNumbers;
console.log(`task 72: numbers is ${numbers}`);

//task 73
console.log(`task 73: --------------------------------------------------------------------------------`);

//task 74
let hasRed = false;
colors.forEach(color => {
    if (color === `RED`) {
        hasRed = true;
    }
});
console.log(`task 74: colors has red is ${hasRed}`);

//task 75
let counter = 0;
colors.forEach(color => {
    if (color.length === 5) {
        counter ++;
    }
});
console.log(`task 75: in ${colors} there are ${counter} colors with 5 letters`);

// -----------------------------------------------------------------------------------------------------------------------

//task 76
function getWordLength(word) {
    return word.length;
}
console.log(`task 76: the amount of letters in each color inside ${colors} is ${colors.map(getWordLength)}`);

//task 77
console.log(`task 77: sqrs numbers of ${numbers} are ${numbers.map(sqrNumbers)}`);

//task 78
function isEven(num) {
    return (num % 2) === 0
}
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10, 9];
console.log(`task 78: the isEven for ${numbers} is ${numbers.map(isEven)}`);

//task 79
function addGreeting(name) {
    return `Hello ${name}`;
}
console.log(`task 79: added greeting is ${seasons.map(addGreeting)}`);

//task 80
function convertingCtoF(temperature) {
    return (temperature * 9 / 5) + 32;
}
function convertingArrOfTemps(arr) {
    return arr.map(convertingCtoF);
}
console.log(`task 80: in C is [0, 20, 30, 100] in F is ${convertingArrOfTemps([0, 20, 30, 100])}`);

// -----------------------------------------------------------------------------------------------------------------------

//task 81
console.log(`task 81: the only evens numbers in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] are ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(isEven)}`);

//task 82
function isLongWord(fruit) {
    return fruit.length > 5;
}
console.log(`task 82: the long words fruits among ["pear", "apples", "bananas", "strawberry", "plum"] are ${([`pear`, `apples`, `bananas`, `strawberry`, `plum`]).filter(isLongWord)}`);

//task 83
function isUnique(num, index, self) {
    return self.indexOf(num) === index;
}
console.log(`task 83: [1, 2, 3, 4, 1, 3, 2, 1, 4, 5] without duplicates vals is ${[1, 2, 3, 4, 1, 3, 2, 1, 4, 5].filter(isUnique)}`);

//task 84
function removeFalsy(val) {
    return val;
}
console.log(`task 84: [true, false, 0, 1, undefined, null, NaN, "", "abc"] with only truthy vals is ${[true, false, 0, 1, undefined, null, NaN, ``, `abc`].filter(removeFalsy)}`);

//task 85
function doesContain(str) {
    return str.includes(`abc`);
}
console.log(`task 85: ["abc", "ABC", "Habcl", "all", "cba", "piggyabc"] with only abc is ${["abc", "ABC", "Habcl", "all", "cba", "piggyabc"].filter(doesContain)}`);

// -----------------------------------------------------------------------------------------------------------------------

//task 86
function doesGreater3(num) {
    return num > 3;
}
console.log(`task 86: the first number that greater than 3 in ${numbers} is ${numbers.find(doesGreater3)}`);

//task 87
function doesStartB(color) {
    return color.startsWith(`b`);
}
console.log(`task 87: the first color in ${colors} that starts with "b" is at index ${colors.findIndex(doesStartB)}`);

//task 88
function isPrime(num) {
    for (let i = 2; i < Math.sqrt(num); i++) {
        if ((num % i) === 0) {
            return false;
        } 
    }
    return true;
}
console.log(`task 88: the first prime number in [15, 27, 31, 14, 17] is ${[15, 27, 31, 14, 17].find(isPrime)}`);

//task 89
function isFall(season) {
    return season === `Fall`;
}
console.log(`task 89: in${seasons}, fall is at index ${seasons.findIndex(isFall)}`);

//task 90
console.log(`task 90: --------------------------------------------------------------------------------`);

// -----------------------------------------------------------------------------------------------------------------------

//task 91
console.log(`task 91: [1, 3, 56, 7] has even numbers is ${[1, 3, 56, 7].some(isEven)}`);

//task 92
function longerThan3(fruit) {
    return fruit.length > 3;
}
console.log(`task 92: fruits are ${fruits} and all longer than 3 letters is ${fruits.every(longerThan3)}`);

//task 93
function isNegative(num) {
    return num < 0;
}
console.log(`task 93: [-1, 0, 1] has negative numbers is ${[-1, 0, 1].some(isNegative)}`);

//task 94
function isUnique2(val, index, self) {
    return self.indexOf(val) === self.lastIndexOf();
}
console.log(`task 94: [-1, 0, 1, 0] is all unique is ${[-1, 0, 1, 0].every(isUnique2)}`);

//task 95
console.log(`task 95: [-2, 0, 2, 4, 5] has negative numbers and all even is ${([-2, 0, 2, 4, 5].some(isNegative)) && ([-2, 0, 2, 4, 5].every(isEven))}`);

// -----------------------------------------------------------------------------------------------------------------------

//task 96
function sumArr(accumulator, num) {
    return accumulator + num;
}
console.log(`task 96: the sum of ${numbers} is ${numbers.reduce(sumArr, 0)}`);

//task 97
function findLongest(longestFruit, currentFruit) {
    return (longestFruit.length < currentFruit.length) ? currentFruit : longestFruit;
}
console.log(`task 97: the longest word among ${fruits} is ${fruits.reduce(findLongest, ``)}`);

//task 98
console.log(`task 98: --------------------------------------------------------------------------------`);

//task 99
// console.log(`task 99: ${}`);

//task 100
// console.log(`task 100: ${}`);

// -----------------------------------------------------------------------------------------------------------------------

//task 101
console.log(`task 101: [1, 2, 1, 3, 21, 1, 2, 3, 21, 46, 1, 90] without duplicates is ${[1, 2, 1, 3, 21, 1, 2, 3, 21, 46, 1, 90].filter(isUnique)}`);

//task 102
function rotateArr(arr, times) {
    for(let i = 0; i < times; i++) {
        arr.push(arr.shift());
    }
    return arr;
}
console.log(`task 102: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] shifted 3 times is ${rotateArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)}`);

//task 103
// console.log(`task 103: ${}`);

//task 104
let array2;
function doesHave(num) {
    return array2.includes(num);
}
function getIntersection(arr1, arr2) {
    array2 = arr2;
    return arr1.filter(doesHave)
}
console.log(`task 104: the intersection between [1, 2, 3, 4, 5] and [2, 5, 6, 7, 8] is ${getIntersection([1, 2, 3, 4, 5], [2, 5, 6, 7, 8])}`);

//task 105
// console.log(`task 105: ${}`);




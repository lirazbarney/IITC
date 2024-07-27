//String Methods Exercises
//task 1
function strLength(str) {
    return str.length;
}
console.log(`task 1: ${strLength(`abc`)}`);

//task 2
function convertToUpper(str) {
    return str.toUpperCase();
}
console.log(`task 2: ${convertToUpper(`abc`)}`);

//task 3
function convertToLower(str) {
    return str.toLowerCase();
}
console.log(`task 3: ${convertToLower(`ABC`)}`);

//task 4
function specificIndexChar(str, index) {
    return str[index];
}
console.log(`task 4: ${specificIndexChar(`abc`, 0)}`);

//task 5
function returnSubstring(str, start, end) {
    return str.slice(start, end);
}
console.log(`task 5: ${returnSubstring(`Hello, World!`, 3, 10)}`);

//task 6
function replaceAllChar(str, oldChar, newChar) {
    return str.replaceAll(oldChar, newChar);
}
console.log(`task 6: ${replaceAllChar(`Hello, World!`, `l`, `z`)}`);

//task 7
function trimWhiteSpaces(str) {
    return str.trim();
}
console.log(`task 7: ${trimWhiteSpaces(`      Hello, World!        `)}`);

//task 8
function doesStartWith(str, char) {
    return (str[0] === char);
}
console.log(`task 8: ${doesStartWith(`abc`, `A`)}`);

//task 9
function doesEndWith(str, char) {
    return (str[strLength(str) - 1] === char);
}
console.log(`task 9: ${doesEndWith(`abc`, `c`)}`);

//task 10
function searchSubString(str, substr) {
    return str.indexOf(substr);
}
console.log(`task 10: ${searchSubString(`Hello, world`, `or`)}`);

//task 11
function strToArray(str, char) {
    return str.split(char);
}
console.log(`task 11: ${strToArray(`Hello, World!`, `l`)}`);

//task 12
function repeatTimes(str, times) {
    return str.repeat(times);
}
console.log(`task 12: ${repeatTimes(`abc`, 3)}`);

//task 13
function concatenateTwoStrings(str1, str2) {
    return (str1 + str2);
}
console.log(`task 13: ${concatenateTwoStrings(`Hello, `, `World!`)}`);

//task 14
function padChar(str, length, char) {
    return str.padEnd(length, char);
}
console.log(`task 14: ${padChar(`abc`, 8, `*`)}`);

//task 15
function firstChars(str, end) {
    return returnSubstring(str, 0, end);
}
console.log(`task 15: ${firstChars(`Hello, World!`, 4)}`);

//task 16
function replaceChar(str, oldChar, newChar) {
    return str.replace(oldChar, newChar)
}
console.log(`task 16: ${replaceChar(`Hello, World!`, `l`, `z`)}`);

//task 17
function hasSubString(str, substr) {
    return (str.indexOf(substr) > -1);
}
console.log(`task 17: ${hasSubString(`abc`, `bcd`)}`);

//task 18
function endWith(str) {
    return str[strLength(str) - 1];
}
console.log(`task 18: ${endWith(`abc`)}`);

//task 19
function  isEmpty(str) {
    return (str === ``);
}
console.log(`task 19: ${isEmpty(`abc`)}`);

//task 20
function lastSubstring(str, index) {
    return returnSubstring(str, index, strLength(str));
}
console.log(`task 20: ${lastSubstring(`Hello, World!`, 8)}`);
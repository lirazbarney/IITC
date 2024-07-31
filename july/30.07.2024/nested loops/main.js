function countCharInArr(strs, char) {
    let count = 0;
    for (let i = 0; i < strs.length; i++) {
        for (let j = 0; j < strs[i].length; j++) {
            count += strs[i][j] === char ? 1 : 0;
        }
    }
    return count;
}
console.log(countCharInArr([`hello`, `liraz`, `hell`, `world`], `l`));
console.log(``);

//task 1
function printStars(amount) {
    let str = ``;
    for (let i = 1; i <= amount; i++) {
        str = ``;
        for (let j = 1; j <= i; j++) {
            str += `*`
        }
        console.log(`task 1: ${str}`);
    }
}
printStars(10);
console.log(``);

//task 2
let str;
for(let i = 1; i <= 10; i++) {
    str = ``;
    for(let j = 1; j <= 10; j++) {
        str += `${i * j} `
    }
    console.log(`task 2: ${str}`);
}
console.log(``);

//task 3
function findNumInMatrix(matrix, num) {
    for (let i  = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === num) {
                console.log(`task 3: row is at ${i}, column is at ${j}`);
            }
        }
    }
}
findNumInMatrix([[1, 2, 3], [4, 5], [6], [7, 8, 9, 10]], 10);
console.log(``);

//task 4
function countVowels(str) {
    const vowels = `AaEeIiOoUu`;
    let isVowel = false;
    let counter = [0, 0];
    for (let i = 0; i < str.length; i++) {
        isVowel = false;
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                isVowel = true;
                break;
            } 
        }
        if (isVowel) {
            counter[0]++;
        } else {
            counter[1]++;
        }
    }
    return counter;
}
let counter = countVowels(`helloWORLD`);
console.log(`task 4: vowel count is ${counter[0]}, Consonants count is ${counter[1]}`);;
console.log(``);

//task 5
function reverseStr(str) {
    let temp;
    for (let i = 0; i < str.length / 2; i++) {
        temp = str[i];
        str = changeStr(str, i, i + 1, str[str.length - i -1]);
        str = changeStr(str, str.length - i -1, str.length - i, temp);

    }
    return str;
}
function changeStr(str, startIndex, endIndex, newSubStr) {
    let finalStr = ``;
    finalStr += str.slice(0, startIndex);
    finalStr += newSubStr;
    finalStr += str.slice(endIndex, str.length);
    return finalStr;
}
console.log(`task 5: ${reverseStr(`hello world`)}`);
console.log(``);

//task 6
function printNumberPyramid(count) {
    let str;
    for (let i = 1; i <= count; i++) {
        str = ``;
        for (let j = 1; j <= i; j++) {
            str += `${j}`;
        }
        console.log(`task 6: ${str}`);
    }
}
printNumberPyramid(5);
console.log(``);

//task 7
function sum2DArr(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
    }
    return sum;
}
console.log(`task 7: ${sum2DArr([[1, 2] , [3, 4], [5, 6], [9]])}`);
console.log(``);

//task 8
function getLettersFrequency(str) {
    let lettersFrequency = [];
    for (let i = `A`.charCodeAt(0); i <= `Z`.charCodeAt(0); i++) {
        lettersFrequency.push([String.fromCharCode(i), 0])
    }
    for (let i = 0; i < str.length; i++) {
        for(let j = 0; j < 26; j++) {
            if (str[i].toUpperCase() === lettersFrequency[j][0]) {
                lettersFrequency[j][1]++
            }
        }
    }
    return lettersFrequency
}
function arrToString(arr) {
    let str = ``;
    for (let i = 0; i < 26; i++) {
        if (arr[i][1] > 0) {
            str += ` ${arr[i][0]}: ${arr[i][1]}; `
        }
    }
    return str;
}
console.log(`task 8: ${arrToString(getLettersFrequency(`hello, world!`))}`);
console.log(``);

//task 9
let resultArr = [], originArr = [[1, 2, 3], [4, 5, 6], [7, 8], [9]];
for (let i = 0; i < originArr.length; i++) {
    for (let j = 0; j < originArr[i].length; j++) {
        resultArr.push(originArr[i][j]);
    }
}
console.log(`task 9: result arr is `);
console.log(resultArr);
console.log(``);

//task 10
let matrix = [[1, 2, 3], [4, 5, 6]];
let newMatrix = [];
let tempArr = [];
for (let i = 0; i < matrix[0].length; i++) {
    tempArr = [];
    for(let j = 0; j < matrix.length; j++) {
        tempArr.push(matrix[j][i]);
    }
    newMatrix.push(tempArr);
}
console.log(`task 10: the new matrix is `);
console.log(newMatrix);
console.log(``);

//task 11
function isPalindrome(str) {
    for(let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
function isPalindromeNested(str) {
    for (let i = 0; i < str.length / 2; i++) {
        for (let j = 0; j < 1; j++) {
            if (str[i] !== str[str.length - i - 1]) {
                return false;
            }
        }
    }
    return true;
}
console.log(`task 11: the string "radar" is palindrome is ${isPalindrome(`raadar`)}`);
console.log(`task 11: the string "radar" is palindrome is ${isPalindromeNested(`raadar`)}`);
console.log(``);

//task 12
let arr1 = [1, 3, 5, 7, 9, 11], arr2 = [1, 2, 3, 4, 5, 10, 11, 12, 13, 14]; //[1, 3, 5, 11] is the common
let commonArr = [];
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            commonArr.push(arr1[i]);
            break;
        }
    }
}
console.log(`task 12: ${commonArr}`);
console.log(``);

//task 13
function primeInRange(start, end) {
    let primeStr = `all the prime numbers between ${start} to ${end} are:`;
    let isPrime;
    for (; start <= end; start++) {
        isPrime = true;
        for(let i = 2; i < Math.sqrt(start); i++) {
            if ((start % i) === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime)  {
            primeStr += ` ${start}`;
        }
    }
    console.log(`task 13: ${primeStr}`);
}
primeInRange(10, 20);
console.log(``);

//task 14
let array2D = [[1, 6, 20], [2, 3, 1], [0], [100, -9]];
let arraySum = [];
let currentSum = 0, lastSum = 0;
for(let i = 0; i < array2D.length; i++) {
    arraySum[i] = 0;
    for (let j = 0; j < array2D[i].length; j++) {
        arraySum[i] += array2D[i][j];
    }
}
for (let i = 1; i < array2D.length; i++) {
    for (let j = 0; j < i; j++)  {
        if (arraySum[j] > arraySum[i]) {
            [array2D[j], array2D[i]] = [array2D[i], array2D[j]];
            [arraySum[j], arraySum[i]] = [arraySum[i], arraySum[j]];
        }
    }
}
console.log(`task 14:`);
console.log(array2D);


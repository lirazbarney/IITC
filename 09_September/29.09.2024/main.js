//q1
console.log("q1: ");
[1, 2, 3, 4, 5].forEach((number) => {
  console.log(number);
});

//q2
console.log("q2: ");
[1, 2, 3, 4, 5].forEach((number) => {
  console.log(number * 2);
});

//q3
console.log("q3: ");
const squaredNumbers = [];
[1, 2, 3, 4, 5].forEach((number) => {
  squaredNumbers.push(Math.pow(number, 2));
});
console.log(squaredNumbers);

//q4
console.log("q4: ");
let sum = 0;
[1, 2, 3, 4, 5].forEach((number) => {
  sum += number;
});
console.log(sum);

//q5
console.log("q5: ");
let newStr = "";
["Hello", " ", "World", "!"].forEach((str) => {
  newStr += str;
});
console.log(newStr);

//q6
console.log("q6: ");
const doubledNumbers = [];
[1, 2, 3, 4, 5].map(function (number) {
  doubledNumbers.push(number * 2);
});
console.log(doubledNumbers);

//q7
console.log("q7: ");
const fruitsLength = [];
["תפוח", "בננה", "דובדבן"].map(function (fruit) {
  fruitsLength.push(fruit.length);
});
console.log(fruitsLength);

//q8
console.log("q8: ");
const sqrtsNumber = [];
[1, 4, 9, 16, 25].map(function (number) {
  sqrtsNumber.push(Math.sqrt(number));
});
console.log(sqrtsNumber);

//q9
console.log("q9: ");
const upperStrs = [];
["hello", "world"].map(function (str) {
  upperStrs.push(str.toUpperCase());
});
console.log(upperStrs);

//q10
console.log("q10: ");
const upsidedownBools = [];
[true, false, true].map(function (bool) {
  upsidedownBools.push(!bool);
});
console.log(upsidedownBools);

//q11
console.log("q11: ");
const evenNums = [1, 2, 3, 4, 5, 6].filter(function (num) {
  return num % 2 === 0;
});
console.log(evenNums);

//q12
console.log("q12: ");
const longStrs = ["תפוח", "בננה", "דובדבן", "תמר", "אלדרברי"].filter(function (
  str
) {
  return str.length > 5;
});
console.log(longStrs);

//q13
console.log("q13: ");
const bigNumbers = [5, 10, 15, 20, 25].filter(function (num) {
  return num > 10;
});
console.log(bigNumbers);

//q14
console.log("q14: ");
const startWithT = ["תפוח", "בננה", "תפוז", "דובדבן"].filter(function (str) {
  return str[0] === "ת";
});
console.log(startWithT);

//q15
console.log("q15: ");
const placedAtEven = [1, 2, 3, 4, 5, 6].filter(function (num, index) {
  return index % 2 === 0;
});
console.log(placedAtEven);

//q16
console.log("q16: ");
const sumReduce = [1, 2, 3, 4, 5].reduce(function (total, num) {
  return total + num;
}, 0);
console.log(sumReduce);

//q17
console.log("q17: ");
const allMultiplier = [1, 2, 3, 4, 5].reduce(function (total, num) {
  return total * num;
}, 1);
console.log(allMultiplier);

//q18
console.log("q18: ");
const biggestNum = [10, 5, 15, 20, 25].reduce(function (max, num) {
  return num > max ? num : max;
}, Math.max());
console.log(biggestNum);

//q19
console.log("q19: ");
const newStrReduce = ["שלום", " ", "עולם", "!"].reduce(function (newStr, str) {
  return newStr + str;
}, "");
console.log(newStrReduce);

//q20
console.log("q20: ");
const numTimes = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4].reduce(function (times, num) {
  times[num] ? times[num]++ : (times[num] = 1);
  return times;
}, {});
console.log(numTimes);

//q21
console.log("q21: ");
const hasLargerThan3 = [1, 2, 3, 4, 5].some(function (num) {
  return num > 3;
});
console.log(hasLargerThan3);

//q22
console.log("q22: ");
const areAllEven = [2, 4, 6, 8, 10].every(function (num) {
  return num % 2 === 0;
});
console.log(areAllEven);

//q23
console.log("q23: ");
const areAllLargeStr = ["תפוח", "בננה", "דובדבן"].some(function (str) {
  return str.length > 6;
});
console.log(areAllLargeStr);

//q24
console.log("q24: ");
const lettersConsts = "בגדזחטכלמנסעפצקרשת";
const startWithConsts = ["חתול", "כלב", "פיל"].every(function (str) {
  return lettersConsts.includes(str[0]);
});
console.log(startWithConsts);

//q25
console.log("q25: ");
const hasTrue = [false, false, true, false].some(function (bool) {
  return bool;
});
console.log(hasTrue);

//q26
console.log("q26: ");
const biggerThan3 = [1, 2, 3, 4, 5].find(function (num) {
  return num > 3;
});
console.log(biggerThan3);

//q27
console.log("q27: ");
const firstEven = [1, 2, 3, 4, 5, 6].findIndex(function (num) {
  return num % 2 === 0;
});
console.log(firstEven);

//q28
console.log("q28: ");
const longestStr = ["תפוח", "בננה", "דובדבן"].find(function (str) {
  return str.length > 5;
});
console.log(longestStr);

//q29
console.log("q29: ");
const findCherry = ["תפוח", "בננה", "דובדבן", "תמר"].findIndex(function (
  fruit
) {
  return fruit === "דובדבן";
});
console.log(findCherry);

//q30
console.log("q30: ");
const firstMinus = [1, 2, 3, -4, 5, -6].find(function (num) {
  return num < 0;
});
console.log(firstMinus);

//q31
console.log("q31: ");
const sortedArr = [3, 1, 4, 1, 5, 9, 2, 6, 5].sort();
console.log(sortedArr);

//q32
console.log("q32: ");
const sortedFruits = ["בננה", "דובדבן", "תפוח", "תמר"].sort();
console.log(sortedFruits);

//q33
console.log("q33: ");
const sortedArrUpsidedown = [3, 1, 4, 1, 5, 9, 2, 6, 5].sort(function (a, b) {
  return b - a;
});
console.log(sortedArrUpsidedown);

//q34
console.log("q34: ");
const sortedFruitsByLength = ["בננה", "דובדבן", "תפוח", "תמר"].sort(function (
  fruitA,
  fruitB
) {
  return fruitA.length - fruitB.length;
});
console.log(sortedFruitsByLength);

//q35
console.log("q35: ");
const sortedPeopleByAge = [
  { name: "יוחנן", age: 25 },
  { name: "יעל", age: 30 },
  { name: "בועז", age: 20 },
].sort(function (personA, personB) {
  return personA.age - personB.age;
});
console.log(sortedPeopleByAge);

//q36
console.log("q36: ");
const flatedArr = [1, [2, 3], [4, [5, 6]]].flat(Infinity);
console.log(flatedArr);

//q37
console.log("q37: ");
const flatedArr2levels = [1, [2, [3, [4]]]].flat(2);
console.log(flatedArr2levels);

//q38
console.log("q38: ");
const withoutSpaces = [1, 2, , 4, 5].flat();
console.log(withoutSpaces);

//q39
console.log("q39: ");
const flatedLettersArr = ["א", ["ב", "ג"], "ד"].flat();
console.log(flatedLettersArr);

//q40
console.log("q40: ");
const flatedArrAllTheWay = [1, [2, [3, [4, [5]]]]].flat(Infinity);
console.log(flatedArrAllTheWay);

//q41
console.log("q41: ");
["א", "ב", "ג", "ד"].forEach(function (letter, index) {
  console.log(`at index ${index}, there is the letter ${letter}`);
});

//q42
console.log("q42: ");
const keysNvals = [];
[10, 20, 30, 40].map(function (number, index) {
  keysNvals.push({ index: index, value: number });
});
console.log(keysNvals);

//q43
console.log("q43: ");
const allWithLetterA = ["תפוח", "בננה", "אבטיח", "תמר"].filter(function (
  fruit
) {
  return fruit.includes("א");
});
console.log(allWithLetterA);

//q44
console.log("q44: ");
const timesOfLetters = ["א", "ב", "א", "ג", "ב", "א"].reduce(function (
  times,
  letter
) {
  times[letter] ? times[letter]++ : (times[letter] = 1);
  return times;
},
{});
console.log(timesOfLetters);

//q45
console.log("q45: ");
const hasLetterZ = ["שלום", "עולם", `ג׳אווהסקריפט`].some(function (str) {
  return str.includes("ז");
});
console.log(hasLetterZ);

//q46
console.log("q46: ");
const allEven = [2, 4, 6, 8].every(function (num) {
  return num % 2 === 0;
});
console.log(allEven);

//q47
console.log("q47: ");
const firstActive = [
  { id: 1, status: "לא פעיל" },
  { id: 2, status: "פעיל" },
].find(function (obj) {
  return obj.status === "פעיל";
});
console.log(firstActive);

//q48
console.log("q48: ");
const firstNegative = [3, 7, -2, 9, -5].findIndex(function (num) {
  return num < 0;
});
console.log(firstNegative);

//q49
console.log("q49: ");
const languagesSorted = ["JavaScript", "Python", "Ruby", "Java"].sort(function (
  languageA,
  languageB
) {
  return languageA.length - languageB.length;
});
console.log(languagesSorted);

//q50
console.log("q50: ");
const firstLevelFlatedArr = [1, [2, [3]], [4, [5]]].flat(1);
console.log(firstLevelFlatedArr);

//q51
console.log("q51: ");
let NewHello = "";
["ש", "ל", "ו", "ם"].forEach(function (letter) {
  NewHello += letter;
});
console.log(NewHello);

//q52
console.log("q52: ");
const plus10 = [];
[1, 2, 3, 4, 5].map(function (num) {
  plus10.push(num + 10);
});
console.log(plus10);

//q53
console.log("q53: ");
const dividedBy3 = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function (num) {
  return num % 3 === 0;
});
console.log(dividedBy3);

//q54
console.log("q54: ");
const theLongestStr = ["קצר", "בינוני", "הכי ארוך", "ארוך יותר"].reduce(
  function (longestStr, str) {
    return str.length > longestStr.length ? str : longestStr;
  },
  ""
);
console.log(theLongestStr);

//q55
console.log("q55: ");
const hasEven = [1, 3, 5, 7, 9].some(function (num) {
  return num % 2 === 0;
});
console.log(hasEven);

//q56
console.log("q56: ");
const startWithTP = ["תפוח", "תפ", "תפוז"].every(function (str) {
  return str[0] === "ת" && str[1] === "פ";
});
console.log(startWithTP);

//q57
console.log("q57: ");
const firstCompleted = [
  { id: 1, completed: false },
  { id: 2, completed: true },
].find(function (obj) {
  return obj.completed === true;
});
console.log(firstCompleted);

//q58
console.log("q58: ");
const placeOfBanana = ["תפוח", "בננה", "דובדבן"].findIndex(function (fruit) {
  return fruit === "בננה";
});
console.log(placeOfBanana);

// //q59
// console.log("q59: ");
// const sortedByName = [
//   { name: "יוחנן", age: 25 },
//   { name: "יעל", age: 30 },
//   { name: "בועז", age: 20 },
// ].sort(function (personA, personB) {
//   return personA.name - personB.name;
// });
// console.log(sortedByName);

//q60
console.log("q60: ");
const another2LevelFlat = [1, [2, 3], [4, [5, 6]]].flat(2);
console.log(another2LevelFlat);

//q61
console.log("q61: ");
"שלום".split("").forEach(function (letter) {
  console.log(letter);
});
console.log();

//q62
console.log("q62: ");
const fistLetters = ["תפוח", "בננה", "דובדבן"].map(function (fruit) {
  return fruit[0];
});
console.log(fistLetters);

//q63
console.log("q63: ");
const longerThan3 = ["א", "אב", "אבג", "אבגד"].filter(function (str) {
  return str.length > 3;
});
console.log(longerThan3);

//q64
console.log("q64: ");
const totalLetters = ["תפוח", "בננה", "דובדבן"].reduce(function (total, fruit) {
  return total + fruit.length;
}, 0);
console.log(totalLetters);

//q65
console.log("q65: ");
const hasLongerThan10 = ["שלום", "עולם", `ג'אווהסקריפט`].some(function (str) {
  return str.length > 10;
});
console.log(hasLongerThan10);

//q66
console.log("q66: ");
const biggerThan5 = [10, 20, 30, 40, 50].every(function (num) {
  return num > 5;
});
console.log(biggerThan5);

//q67
console.log("q67: ");
const firstWith = ["ספר", "דלת", "חלון"].find(function (str) {
  return str.includes("וו");
});
console.log(firstWith);

//q68
console.log("q68: ");
const firstPlaceOfBiggerThan10 = [5, 10, 15, 20].findIndex(function (num) {
  return num > 10;
});
console.log(firstPlaceOfBiggerThan10);

//q69
console.log("q69: ");
const sortedByLength = ["אאא", "בב", "ג"].sort(function (strA, strB) {
  return strA.length - strB.length;
});
console.log(sortedByLength);

//q70
console.log("q70: ");
const threeLeveledFlated = [1, [2, [3, [4]]]].flat(3);
console.log(threeLeveledFlated);

//q71
console.log("q71: ");
const squaredRootNumbers = [];
[1, 4, 9, 16].forEach(function (num) {
  squaredRootNumbers.push(Math.sqrt(num));
});
console.log(squaredRootNumbers);

//q72
console.log("q72: ");
const doubledLetters = [];
["א", "ב", "ג"].map(function (letter) {
  doubledLetters.push(letter, letter);
});
console.log(doubledLetters);

//q73
console.log("q73: ");
const inRange = [5, 10, 15, 20, 25].filter(function (num) {
  return num >= 10 && num <= 20;
});
console.log(inRange);

// //q74
// console.log("q74: ");
// const reducedNewObj = [{ א: 1 }, { ב: 2 }, { ג: 3 }].reduce(function (
//   newObj,
//   obj
// ) {
//   const allKeys = obj.keys;
//   console.log(obj[0]);
// },
// {});
// console.log();

// //q75
// console.log("q75: ");
// console.log();

// //q76
// console.log("q76: ");
// console.log();

// //q77
// console.log("q77: ");
// console.log();

// //q78
// console.log("q78: ");
// console.log();

// //q79
// console.log("q79: ");
// console.log();

// //q80
// console.log("q70: ");
// console.log();

// //q81
// console.log("q81: ");
// console.log();

// //q82
// console.log("q82: ");
// console.log();

// //q83
// console.log("q83: ");
// console.log();

// //q84
// console.log("q84: ");
// console.log();

// //q85
// console.log("q85: ");
// console.log();

// //q86
// console.log("q86: ");
// console.log();

// //q87
// console.log("q87: ");
// console.log();

// //q88
// console.log("q88: ");
// console.log();

// //q89
// console.log("q89: ");
// console.log();

// //q90
// console.log("q90: ");
// console.log();

// //q91
// console.log("q91: ");
// console.log();

// //q92
// console.log("q92: ");
// console.log();

// //q93
// console.log("q93: ");
// console.log();

// //q94
// console.log("q94: ");
// console.log();

// //q95
// console.log("q95: ");
// console.log();

// //q96
// console.log("q96: ");
// console.log();

// //q97
// console.log("q97: ");
// console.log();

// //q98
// console.log("q98: ");
// console.log();

// //q99
// console.log("q99: ");
// console.log();

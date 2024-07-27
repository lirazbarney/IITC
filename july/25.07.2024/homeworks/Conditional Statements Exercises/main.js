//Conditional Statements Exercises
//task 1
let age = 19;
let canVote = false;
if (age >= 18) {
    canVote = true;
}
console.log(`task 1: the age is ${age} so canVote is ${canVote}`);

//task 2
let temperature = -10;
let weather;
if (temperature < 0) {
    weather = `freezing`;
} else {
    weather = `not freezing`;
}
console.log(`task 2: the temperature is ${temperature} so the weather is ${weather}`);

//task 3
let score = 69;
let result;
if (score >= 60) {
    result = `pass`;
} else {
    result = `fail`;
}
console.log(`task 3: the score is ${score} so the result is ${result}`);

//task 4
let grade = 69;
let letterGrade;
if (grade >= 90) {
    letterGrade = `A`;
} else if (grade >= 80) {
    letterGrade = `B`;
} else {
    letterGrade = `C`;
}
console.log(`task 4: the grade is ${grade} so letterGrade is ${letterGrade}`);

//task 5
let number = 8;
let isEven = false;
if ((number % 2) === 0) {
    isEven = true;
}
console.log(`task 5: the number is ${number} so isEven is ${isEven}`);

//task 6
let year = 2025;
let isLeapYear;
if ((year % 4) === 0) {
    isLeapYear = true;
} else {
    isLeapYear = false;
}
console.log(`task 6: the year is ${year} so isLeapYear is ${isLeapYear}`);

//task 7
let hour = 15;
let period;
if ((hour < 0) || (hour > 23)) {
    period = `invalid`;
} else if (hour < 12) {
    period = `AM`;
} else {
    period = `PM`;
}
console.log(`task 7: the hour is ${hour} so the period is ${period}`);

//task 8
let dayNumber = 7;
let dayName;
if ((dayNumber > 7) || (dayNumber < 1)) {
    dayName = `invalid`;
} else if (dayNumber === 1) {
    dayName = `Sunday`;
} else if (dayNumber === 2) {
    dayName = `Monday`;
} else if (dayNumber === 3) {
    dayName = `Tuesday`;
} else if (dayNumber === 4) {
    dayName = `Wednesday`;
} else if (dayNumber === 5) {
    dayName = `Thursday`;
} else if (dayNumber === 6) {
    dayName = `Friday`;
} else {
    dayName = `Saturday`;
}
console.log(`task 8: the dayNumber is ${dayNumber} so the dayName is ${dayName}`);

//task 9
let name = ``;
let hasName = true;
if (name === ``) {
    hasName = false;
}
console.log(`task 9: the name is ${name} so the hasName is ${hasName}`);

//task 10
let amount = 10001;
let shipping;
if (amount > 1000) {
    shipping = 0;
} else {
    shipping = 5;
}
console.log(`task 10: the amount is ${amount} so the shipping is ${shipping}`);

//task 11
let password = `secret12`;
let isLoggedIn;
if (password === `secret123`) {
    isLoggedIn = true;
} else { 
    isLoggedIn = false;
}
console.log(`task 11: the password is ${password} so the isLoggedIn is ${isLoggedIn}`);

//task 12
let month = 7;
let season;
if ((month > 12) || (month < 1)) {
    season = `invalid`;
} else  if ((month >= 3) && (month <= 5)) {
    season = `Spring`;
} else if ((month >= 6) && (month <= 8)) {
    season = `Summer`;
} else if ((month >= 9) && (month <= 11)) {
    season = `Fall`;
} else {
    season = `Winter`;
}
console.log(`task 12: the month is ${month} so the season is ${season}`);

//task 13
let income = 500000;
let creditScore = 7000;
let loanApproved = false;
if ((income > 50000) && (creditScore > 700)) {
    loanApproved = true;
}
console.log(`task 13: the income is ${income} and the creditScore is ${creditScore} so the loanApproved is ${loanApproved}`);

//task 14
let discount;
age = 66
if ((age < 18) || (age > 65)) {
    discount = 0.2;
} else {
    discount = 0;
}
console.log(`task 14: the age is ${age} so the discount is ${discount}`);

//task 15
let inRange;
number = 1;
if ((number >= 1) && (number <= 10)) {
    inRange = true;
} else {
    inRange = false;
}
console.log(`task 15: the number is ${number} so the inRange is ${inRange}`);

//task 16
dayNumber = 8;
switch (dayNumber) {
    case 1: 
        dayName = `Sunday`;
        break;
    case 2: 
        dayName = `Monday`;
        break;
    case 3: 
        dayName = `Tuesday`;
        break;
    case 4: 
        dayName = `Wednesday`;
        break;
    case 5: 
        dayName = `Thursday`;
        break;
    case 6: 
        dayName = `Friday`;
        break;
    case 7: 
        dayName = `Saturday`;
        break;
    default:
        dayName = `invalid`;
    
}
console.log(`task 16: the dayNumber is ${dayNumber} so the dayName is ${dayName}`);

//task 17
grade = `F`;
let description;
switch (grade) {
    case `A`:
        description = `Excellent!`;
        break;
    case `B`:
        description = `Very Good!`;
        break;
    case `C`:
        description = `Good!`;
        break;
    case `D`:
        description = `Poorly!`;
        break;
    case `F`:
        description = `Fail!`;
        break;
    default:
        description = `invalid`
}
console.log(`task 17: the grade is ${grade} so the description is ${description}`);

//task 18
number = -10;
let sign;
if (number > 0) {
    sign = `+`;
} else if (number < 0) {
    sign = `-`;
} else {
    sign = `0`;
}
console.log(`task 18: the number is ${number} so the sign is ${sign}`);

//task 19
year = 2100;
let isCenturyLeapYear;
if (((year % 100) === 0) && ((year % 400) === 0)) { //can also be written only as ((year % 400) === 0)
    isCenturyLeapYear = true;
} else {
    isCenturyLeapYear = false;
}
console.log(`task 19: the year is ${year} so the isCenturyLeapYear is ${isCenturyLeapYear}`);

//task 20
month = 7;
let daysInMonth;
switch (month) {
    case 1:
        daysInMonth = 31;
        break;
    case 2:
        daysInMonth = 28;
        break;
    case 3:
        daysInMonth = 31;
        break;
    case 4:
        daysInMonth = 30;
        break;
    case 5:
        daysInMonth = 31;
        break;
    case 6:
        daysInMonth = 30;
        break;
    case 7:
        daysInMonth = 31;
        break;
    case 8:
        daysInMonth = 31;
        break;
    case 9:
        daysInMonth = 30;
        break;
    case 10:
        daysInMonth = 31;
        break;
    case 11:
        daysInMonth = 30;
        break;
    case 12:
        daysInMonth = 31;
        break;
    default:
        daysInMonth =`invalid`;
}
console.log(`task 20: the month is ${month} so the daysInMonth is ${daysInMonth}`);

//task 21
number = -2;
let parity;
if (number > 0) {
    sign = `+`;
    if ((number % 2) === 0) {
        parity = true;
    } else {
        parity = false;
    }
} else if (number < 0) {
    sign = `-`;
    if ((number % 2) === 0) {
        parity = true;
    } else {
        parity = false;
    }
} else {
    sign = `0`;
    parity = true;
}
console.log(`task 21: the number is ${number} so the sign is ${sign} and the parity is ${parity}`);

//task 22
score = 1000;
let attendance = 0.7;
if (score > 90) {
    if (attendance >= 0.8) {
        grade = `A`;
    } else {
        grade = `B`;
    }
} else if (score > 80){
    if (attendance >= 0.8) {
        grade = `B`;
    } else {
        grade = `C`;
    }
} else if (score > 70){
    if (attendance >= 0.8) {
        grade = `C`;
    } else {
        grade = `D`;
    }
} else if (score > 60){
    if (attendance >= 0.8) {
        grade = `D`;
    } else {
        grade = `F`;
    }
} else {
    grade = `F`;
}
console.log(`task 22: the score is ${score} and the attendance is ${attendance} so the grade is ${grade}`);

//task 23
year = 400;
if ((((year % 4) === 0) && ((year % 100) !== 0)) || ( (year % 400)=== 0)) {
    isLeapYear = true;
}
console.log(`task 23: the year is ${year} so the isLeapYear is ${isLeapYear}`);

//task 24
age = 17;
let isEmployed = false;
let person;
if (age < 18) {
    person = `Student`;
} else if (age > 65) {
    person = `Retiree`;
} else {
    if (isEmployed) {
        person = `Employed Adult`;
    } else {
        person = `Unemployed Adult`;
    }
}
console.log(`task 24: the age is ${age} and the isEmployed is ${isEmployed} so the person is ${person}`);

//task 25
//to be honest i didn't understood what it meant by "where some months can belong to multiple seasons"
season = ``;
month = 7;
switch (month) {
    case 11: 
    case 12:
    case 1:
    case 2:
        season += `Winter`;
        if ((month !== 11) && (month !== 2)) {
            break;
        } else {
            season += ` & `;
        }
    case 2:
    case 3:
    case 4:
    case 5:
        season += `Spring`;
        if (month !== 5) {
            break;
        } else {
            season += ` & `;
        }
    case 5:
    case 6:
    case 7:
    case 8:
    case 9: 
        season += `Summer`;
        if (month !== 9) {
            break;
        } else {
            season += ` & `;
        }
    case 9:
    case 10:
    case 11:
        season += `Fall`
        break;
    default: 
        season = `invalid`;
}
console.log(`task 25: the month is ${month} so the season is ${season}`);

//task 26
let x = -9;
let y= 9;
let quadrant;
if ((x > 0) && ((y > 0))) {
    quadrant = 1;
} else if ((x < 0) && ((y > 0))) {
    quadrant = 2;
} else if ((x < 0) && ((y < 0))) {
    quadrant = 3;
} else {
    quadrant = 4;
}
console.log(`task 26: the x is ${x} and the y is ${y} so the quadrant is ${quadrant}`);

//task 27
console.log(`task 27: look i ain't no physician and i don't know about pressure and water so ill pass this task :)`);

//task 28
month = 2;
isLeapYear = false;
if ((month === 1) || (month === 3) || (month === 5) || (month === 7) || (month === 8) || (month === 10) || (month === 12)) {
    daysInMonth = 31;
} else if ((month === 4) || (month === 6) || (month === 9) || (month === 11)) {
    daysInMonth = 30;
} else if (month === 2) {
    if (isLeapYear) {
        daysInMonth = 29;
    } else {
        daysInMonth = 28;
    }
} else {
    daysInMonth = `invalid`
}
console.log(`task 28: the month is ${month} and the isLeapYear is ${isLeapYear} so the daysInMonth is ${daysInMonth}`);

//task 29
let a = 1;
let b = 3;
let c = 4;
let canBeTriangle;
if (((a + b) > c) && ((((a - b) > 0) && ((a - b) < c)) || (((b - a) > 0) && ((b - a) < c)))) {
    canBeTriangle = true;
} else if (((a + c) > b) && ((((a - c) > 0) && ((a - c) < b)) || (((c - a) > 0) && ((c - a) < b)))) {
    canBeTriangle = true;
} else if (((b + c) > a) && ((((b - c) > 0) && ((b - c) < a)) || (((c - b) > 0) && ((c - b) < a)))) {
    canBeTriangle = true;    
} else {
    canBeTriangle = false;
}
console.log(`task 29: the a is ${a}, the b is ${b} and the c is ${c} so the canBeTriangle is ${canBeTriangle}`);

//task 30
console.log(`task 30: i'll be honest , i just don't know hoe to start and what to do and how the quadric equation can be solved with if-else and especially nested one`);

//task 31
number = 8;
parity = ((number % 2) === 0) ? `Even` : `Odd`;
console.log(`task 31: the number is ${number} so the parity is ${parity}`);

//task 32
age = 17;
canVote = (age >= 18) ? true : false;
console.log(`task 32: the age is ${age} so the canVote is ${canVote}`);
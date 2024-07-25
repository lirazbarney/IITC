//variable declaration and boolean expression
let firstName = "Liraz";
let lastName = "Bar-Nir";
let age = 23;
let isStudent = true;

let isAdult = age > 18;

let isJohn = firstName === "john";
if (isJohn) {
    console.log("im john");
} else {
    console.log("who is john? im " + firstName + " " + lastName);
}

//functions and string methods
function greet(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    return fullName.toUpperCase();
}
console.log(greet(firstName, lastName));

//if and else conditions
function checkAge(age) {
    if (age < 13) {
        console.log("you are a child");
    } else if (age <= 17) {
        console.log("you are teenager");
    } else if (age <= 64) {
        console.log("you are adult");
    } else {
        console.log("you are a senior");
    }
}
checkAge(age);

//switch statement
function getDayMessage(dayOffWeek) {
    switch(dayOffWeek) {
        case "Sunday": //if(day... === "sunday")
            console.log("the starting of the week");
            break;
        case "Monday":
            console.log("only 4 more days until weekend");
            break;
        case "Tuesday":
            console.log("only 3 more days until weekend");
            break;
        case "Wednesday":
            console.log("weekend starts tomorrow");
            break;
        case "Thursday":
            console.log("let the weekend begin");
            break;
        case "Friday":
            console.log("enjoy your times off");
            break;
        case "Saturday":
            console.log("having the time of my life at home");
            break;
        default:
            console.log("check for any typos");
    }
}
getDayMessage("Baba");

//complex conditions
function checkEligibility(age, isStudent) {
    if (age < 18) {
        if (isStudent) {
            console.log("you are a minor student");
        } else {
            console.log("you are a minor non student");
        }
    } else if (age < 24) {
        if (isStudent) {
            console.log("you are a young adult student");
        } else {
            console.log("you are a young adult non student");
        }
    } else {
        if (isStudent) {
            console.log("you are a adult student");
        } else {
            console.log("you are a adult non student");
        }
    }
}
checkEligibility(age, isStudent);

//string comparison and manipulation
function formatName(name){
    name = name.trim();
    name = name.toLowerCase();
    if (name === "admin") {
        return "Welcome, Admin!";
    } else {
        return "hello " + name;
    }
}
console.log(formatName("     ADMIN     "));

//nested if statements
function checkDiscount(age, isMember){
    if (age < 18) {
        if(isMember) { 
            return "You get a 20% discount.";
        } else {
            return "You get a 10% discount.";
        }
    } else if (age < 65) {
        if (isMember) {
            return "You get a 10% discount.";
        } else {
            return "No discount available.";
        }
    } else { 
        if(isMember) {
            return "You get a 30% discount.";
        } else {
            return "You get a 20% discount.";
        }
    }
}
console.log(checkDiscount(66, true));

//Combining Conditions and Functions
function validateLogin(username, password) {
    let storedUsername = "hello";
    let storedPassword  = "1234"
    if(username === storedUsername && password === storedPassword) {
        return "login successful";
    } else {
        return "Invalid username or password.";
    }
}
console.log(validateLogin("ello", "124"));

//-------------------------------------------------------------------------------------------------------------

//Substring Extraction
function extractInitials(firstName, lastName){
    let firstInitial = firstName.charAt(0);
    let lastInitial = lastName.charAt(0);
    let finalInitials = firstInitial + "." + lastInitial + ".";
    return finalInitials.toUpperCase();
}
console.log(extractInitials("liraz", "barnir"));

//String Replacement
function maskEmail(email) {
    let atIndex = email.indexOf("@");
    email = email.slice(atIndex, email.length);
    let starts = "*".repeat(atIndex);
    email = starts + email;
    return email;
}
console.log(maskEmail("liraz@gmail.com"));

//Nested If-Else
function gradeCalculator(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}
console.log(gradeCalculator(59));

//Complex Boolean Conditions
function canVote(age, isCitizen) {
    if (age >= 18 && isCitizen) {
        return "You are eligible to vote.";
    } else {
        return "You are not eligible to vote.";
    }
}
console.log(canVote(17, true));

//String and Number Conversion
function convertToUpperCaseAndAddAge(name, age) {
    name = name.toUpperCase();
    let password = name + "" + age;
    return password;
}
console.log(convertToUpperCaseAndAddAge("liraz", 23));

//Capitalize First Letter
function capitalize(word) {
    let firstLetter = word[0];
    firstLetter = firstLetter.toUpperCase();
    let restOfWord = word.slice(1, word.length);
    word = firstLetter + restOfWord;
    return word;
}
console.log(capitalize("liraz"));

//Check Substring
function containsSubstring(mainString, subString) {
    let isSubString =mainString.indexOf(subString) !== -1;
    if (isSubString) {
        return true;
    } else {
        return false;
    }
}
console.log(containsSubstring("abcdefghijklmnopqrstuvwxyz", "lmnop"));

//hello
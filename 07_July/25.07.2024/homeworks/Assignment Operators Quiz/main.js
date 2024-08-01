//Assignment Operators Quiz
//task 1
console.log("task 1: the basic assigning operator is \"=\"");

//task 2
console.log("task 2: to assign a value to a variable in js you will use the variable name, the \"=\" and the value like this: varName = \"some value\";");
let varName;
varName = 3;
console.log(`task 2: ${varName}`);

//task 3
console.log("task 3: the += operator increase the variable with the value written next to it");

//task 4
console.log(`task 4: to add 5 to a variable x using the += operator you will have to do x += 5;`);
let x = 5;
x += 5;
console.log(`task 4: ${x}`);

//task 5
console.log(`task 5: the -= operator decrease the variable with the value written next to it`);

//task 6
console.log(`task 6: to subtract 3 from a variable y using the -= operator you will have to do y -= 3;`);
let y = 6;
y -= 3;
console.log(`task 6: ${y}`);

//task 7
console.log(`task 7:  the *= operator multiply the variable with the value written next to it`);

//task 8
console.log(`task 8: to multiply 2 from a variable z using the *= operator you will have to do z *= 2;`);
let z = 4;
z *= 2;
console.log(`task 8: ${z}`);

//task 9
console.log(`task 9:  the /= operator divide the variable with the value written next to it`);

//task 10
console.log(`task 10: to divide 4 from a variable w using the /= operator you will have to do w /= 4;`);
let w = 12;
w /= 4;
console.log(`task 10: ${w}`);

//task 11
console.log("task 11: there is no difference between x = x + 1 and x += 1. they both achieve the same purpose - which is increasing the variable by 1.");

//task 12
console.log(`task 12: to increase a variable by 1 using an assignment operator in js you have three options:
            1. varName = varName + 1;
            2. varName += 1;
            3. varName ++;`);

//task 13
console.log(`task 13: I assume that using the += operator with string will cause the 'added' string to be contracted to the end of the first sting in the variable`);
let greeting = "hello, ";
greeting += "world!";
console.log(`task 13: the actual result of using += with 2 string ("hello, " and "world!") is this: ${greeting}`);

//task 14
console.log("task 14: to add \"hello\" at the end of a variable str you will need to do str += \"hello\";");
let str = "some string";
str += "Hello";
console.log(`task 14: ${str}`);

//task 15
console.log(`task 15: the result of let x = 5; x += 3; should be regular 8`);
x = 5; 
x += 3;
console.log(`task 15: the result of \"let x = 5; x += 3;\" in js is actually ${x}`);

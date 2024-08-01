//Logical Operators Quiz
//task 1
console.log(`task 1: the 3 main logical operators in js are - AND (&&), OR (||) and NOT (!)`);

//task 2
console.log(`task 2: the AND (&&) operator return true if all the values are true (or truthy)`);

//task 3
console.log(`task 3: the result of true && true should be true`);
console.log(`task 3: the result of true && true is actually ${true && true}`);

//task 4
console.log(`task 4: the result of true && false should be false`);
console.log(`task 4: the result of true && false is actually ${true && false}`);

//task 5
console.log(`task 5: the OR (||) operator return true if at least one of the values is true (or truthy)`);

//task 6
console.log(`task 6: the result of false || true should be true`);
console.log(`task 6: the result of false || true is actually ${false || true}`);

//task 7
console.log(`task 7: the result of false || false should be false`);
console.log(`task 7: the result of false || false is actually ${false || false}`);

//task 8
console.log(`task 8: the NOT (!) operator change any true(/truthy) value to false and any false(/falsy) value to true`);

//task 9
console.log(`task 9: the result of !true should be false`);
console.log(`task 9: the result of !true is actually ${!true}`);

//task 10
console.log(`task 10: the result of !false should be true`);
console.log(`task 10: the result of !false is actually ${!false}`);

//task 11
console.log(`task 11: the result of true && true && false should be false`);
console.log(`task 11: the result of true && true && false is actually ${true && true && false}`);

//task 12
console.log(`task 12: the result of false || false || true should be true`);
console.log(`task 12: the result of false || false || true is actually ${false || false || true}`);

//task 13
console.log(`task 13: the order of precedence for logical operators is:
            1. NOT (!)
            2. AND (&&)
            3. OR (||)`);

//task 14
console.log(`task 14: short circuit evaluation is a feature of logical operations where the second boolean is not evaluated if the first boolean already forced the result of the expression.`);
console.log(`task 14: took this fancy answer from chatGPT because WTF?!`);

//task 15
console.log(`task 15: In the expression a && b, b will not be evaluated if a is already false.`);

//task 16
console.log(`task 16: In the expression a || b, b will not be evaluated if a is already true`);

//task 17
console.log(`task 17: the result of 5 > 3 && 2 < 4 should be true`);
console.log(`task 17: the result of 5 > 3 && 2 < 4 is actually ${5 > 3 && 2 < 4}`);

//task 18
console.log(`task 18: the result of 5 > 7 || 3 < 2 should be false`);
console.log(`task 18: the result of 5 > 7 || 3 < 2 is actually ${5 > 7 || 3 < 2}`);

//task 19
console.log(`task 18: the result of !(5 > 3) should be false`);
console.log(`task 19: the result of !(5 > 3) is actually ${!(5 > 3)}`);

//task 20
console.log(`task 20: when using () around any boolean expression it will force it to be evaluated first, like any other mathematical expression with () around it`);

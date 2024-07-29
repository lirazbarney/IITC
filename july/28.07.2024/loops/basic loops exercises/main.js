//Write a for loop that counts from 1 to 5 and prints each number.
for (let i = 1; i < 6; i++) {
    console.log(`task 1: ${i}`);
}
console.log(``);

//Create a for loop that counts from 0 to 9 and prints each number.
for (let i = 0; i < 10; i++) {
    console.log(`task 2: ${i}`);
}
console.log(``);

//Write a for loop that counts from 10 to 1 (backwards) and prints each number.
for(let i = 10; i > 0; i--) {
    console.log(`task 3: ${i}`);
}
console.log(``);

//Create a for loop that counts from 1 to 10, but only prints even numbers.
for(let i = 1; i < 11; i++) {
    if ((i % 2) === 0) {
        console.log(`task 4: ${i}`);
    }
}
console.log(``);

//Write a for loop that counts from 1 to 10, but only prints odd numbers.
for(let i = 1; i < 11; i++) {
    if ((i % 2) === 1) {
        console.log(`task 5: ${i}`);
    }
}
console.log(``);

//Create a for loop that counts from 0 to 15 by 3s (0, 3, 6, 9, 12, 15).
for(let i = 0; i < 16; i += 3) {
    console.log(`task 6: ${i}`);
}
console.log(``);

//Write a for loop that counts from 1 to 20 by 2s (1, 3, 5, ..., 19).
for (let i = 1; i < 20; i += 2) {
    console.log(`task 7: ${i}`);
}
console.log(``);

//Create a for loop that counts from 2 to 20 by 2s (2, 4, 6, ..., 20).
for (let i = 2; i < 21; i += 2) {
    console.log(`task 8: ${i}`);
}
console.log(``);

//Write a for loop that counts from 10 to 0 by 2s (10, 8, 6, ..., 0).
for (let i = 10; i > 0; i -= 2) {
    console.log(`task 9: ${i}`);
}
console.log(``);

//Create a for loop that counts from 5 to 25 by 5s (5, 10, 15, 20, 25).
for (let i = 5; i < 26; i += 5) {
    console.log(`task 10: ${i}`);
}
console.log(``);

//Write a for loop that prints "*" five times on the same line.
console.log(`task 11: -----------------------------`);

//Create a for loop that prints "Hello" three times, each on a new line.
for (let i = 0; i < 3; i++) {
    console.log(`task 12: Hello`);
}

//Write a for loop that prints numbers from 1 to 3, each followed by "!".

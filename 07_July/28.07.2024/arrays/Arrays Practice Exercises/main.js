//task 1
let foods = [`cornflakes`, `pasta`, `stake`, `cheese`, `potatoes`]
console.log(`task 1: ${foods}`);

//task 2
console.log(`task 2: ${foods[2]}`);

//task 3
foods[1] = `rice`;
console.log(`task 3: ${foods}`);

//task 4
foods.push(`pasta`);
console.log(`task 4: ${foods}`);

//task 5
foods.shift();
console.log(`task 5: ${foods}`);

//task 6
console.log(`task 6:`);
for (let i = 0; i < foods.length; i++) {
    console.log(foods[i]);
}

//task 7
console.log(`task 7: ${foods.indexOf(`cheese`)}`);

//task 8
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(`task 8: ${sum}`);

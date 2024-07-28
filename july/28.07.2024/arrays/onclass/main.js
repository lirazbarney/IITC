//1. create an array of your five fav foods
let foods = [`pasta`, `chicken`, `cornflakes`, `cheese`, `hamburger`];

//2. access and print the third item in your fav foods array
console.log(foods[2]);

//3. change the second item in your array to a different food
foods[1] = `cow`;

//4. add a new food to the end of your array using push()
foods.push(`chicken`);

//5. remove the first food from your array using shift
let food = foods.pop();

//6. create a loop that prints all the foods in your array
for (let i = 0; i < foods.length; i++) {
    console.log(foods[i]);
}

//7. find the index of a specific food in your array using indexof()
console.log(`cheese is at ${foods.indexOf(`cheese`)}`);

//8. create an array of numbers and use a loop to calculate their sum
let sum = 0;
let numbers= [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);
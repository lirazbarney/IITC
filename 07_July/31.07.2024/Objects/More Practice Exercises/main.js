//task 11
let playlist = {
  name: `fav songs`,
  songs: [`song1`, `song2`, `song3`],
  duration: 15,
};
playlist.songs.push(`song4`);
let avgLength = (playlist.songs.length * 3) / playlist.songs.length;
console.log(
  `task 11: the average duration of each song is 3 "(assume each song is 3 minutes long)"`
);
console.log(``);

//task 12
let bankAccount = {
  accountNumber: `1234`,
  balance: 10,
  isActive: true,
  deposit: function (amount) {
    this.balance += amount;
    console.log(
      `task 12: bank account number ${this.accountNumber} is active ${this.isActive} has ${this.balance} balance`
    );
  },
  withdraw: function (amount) {
    if (this.balance > amount) {
      this.balance -= amount;
      console.log(
        `task 12: bank account number ${this.accountNumber} is active ${this.isActive} has ${this.balance} balance`
      );
    } else {
      console.log(`task 12: was not able to withdraw you poor cunt`);
    }
  },
};
bankAccount.deposit(10);
bankAccount.withdraw(15);
bankAccount.withdraw(15);
console.log(``);

//task 13
let circle = {
  radius: 1,
  color: `Blue`,
  calculateArea: function () {
    let r2 = this.radius * this.radius;
    return r2 * Math.PI;
  },
  calculateCircumference: function () {
    return this.radius * 2 * Math.PI;
  },
};
console.log(
  `task 13: area of circle with radius of ${
    circle.radius
  } is ${circle.calculateArea()} and the circumference is ${circle.calculateCircumference()}`
);
console.log(``);

//task 14
let student = {
  name: `Liraz`,
  grades: [50],
  calculateAverage: function () {
    let sum = 0;
    this.grades.forEach((grade) => {
      sum += grade;
    });
    return sum / this.grades.length;
  },
  getLetterGrade: function () {
    let avg = this.calculateAverage();
    if (avg >= 90) {
      return `A`;
    } else if (avg >= 80) {
      return `B`;
    } else if (avg >= 70) {
      return `C`;
    } else if (avg >= 60) {
      return `D`;
    } else {
      return `F`;
    }
  },
};
console.log(
  `task 14: my avg grade is ${student.calculateAverage()} and my grade is ${student.getLetterGrade()}`
);
console.log(``);

//task 15

let todoList = {
  tasks: [`clean room`, `pack suitcase`, `laundry`],
  completedTasks: [`clean garage`, `take the dog out`],
  addTask: function (task) {
    this.tasks.push(task);
  },
  completeTask: function (task) {
    this.completedTasks.push(task);
    this.tasks = this.tasks.filter(function (currentTask) {
      return currentTask !== task;
    });
  },
  displayTasks: function () {
    console.log(`task 15: my tasks are: ${this.tasks}`);
    console.log(`task 15: my completed tasks are: ${this.completedTasks}`);
  },
};
let task = `go visit grandma`;
todoList.displayTasks();
todoList.addTask(task);
todoList.displayTasks();
todoList.completeTask(task);
todoList.displayTasks();
console.log(``);

//task 16
let libraryBook = {
  title: `homeTown library book`,
  author: `liraz bar-nir`,
  isbn: `what`,
  isAvailable: true,
  checkOut: function () {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(
        `task 16: you borrowed ${this.title} by ${this.author}. you have 3 weeks to return it`
      );
    } else {
      console.log(
        `task 16: sorry but ${this.title} by ${this.author} is unavailable`
      );
    }
  },
  returnBook: function () {
    this.isAvailable = true;
    console.log(`task 16: you have returned ${this.title} by ${this.author}.`);
  },
};
libraryBook.checkOut();
libraryBook.checkOut();
libraryBook.returnBook();
console.log(``);

//task 17
let colorMixer = {
  color1: `yellow`,
  color2: `blue`,
  mix: function () {
    //   mix: function (color1, color2) {
    // this.color1 = color1;
    // this.color2 = color2;
    switch (this.color1) {
      case `red`:
        switch (this.color2) {
          case `red`:
            console.log(`task 17: red + red = red`);
            break;
          case `green`:
            console.log(`task 17: red + green = red-green`);
            break;
          case `yellow`:
            console.log(`task 17: red + yellow = orange`);
            break;
          case `blue`:
            console.log(`task 17: red + blue = purple`);
            break;
          default:
            console.log(`task 17: invalid color2`);
        }
        break;
      case `green`:
        switch (this.color2) {
          case `red`:
            console.log(`task 17: green + red = green-red`);
            break;
          case `green`:
            console.log(`task 17: green + green = green`);
            break;
          case `yellow`:
            console.log(`task 17: green + yellow = green-yellow`);
            break;
          case `blue`:
            console.log(`task 17: green + blue = green-blue`);
            break;
          default:
            console.log(`task 17: invalid color2`);
        }
        break;
      case `yellow`:
        switch (this.color2) {
          case `red`:
            console.log(`task 17: yellow + red = orange`);
            break;
          case `green`:
            console.log(`task 17: yellow + green = yellow-green`);
            break;
          case `yellow`:
            console.log(`task 17: yellow + yellow = yellow`);
            break;
          case `blue`:
            console.log(`task 17: yellow + blue = green`);
            break;
          default:
            console.log(`task 17: invalid color2`);
        }
        break;
      case `blue`:
        switch (this.color2) {
          case `red`:
            console.log(`task 17: blue + red = purple`);
            break;
          case `green`:
            console.log(`task 17: blue + green = blue-green`);
            break;
          case `yellow`:
            console.log(`task 17: blue + yellow = green`);
            break;
          case `blue`:
            console.log(`task 17: blue + blue = blue`);
            break;
          default:
            console.log(`task 17: invalid color2`);
        }
        break;
      default:
        console.log(`task 17: invalid color1`);
    }
  },
};
// colorMixer.mix(`red`, `red`);
// colorMixer.mix(`red`, `green`);
// colorMixer.mix(`red`, `yellow`);
// colorMixer.mix(`red`, `blue`);
// colorMixer.mix(`green`, `red`);
// colorMixer.mix(`green`, `green`);
// colorMixer.mix(`green`, `yellow`);
// colorMixer.mix(`green`, `blue`);
// colorMixer.mix(`yellow`, `red`);
// colorMixer.mix(`yellow`, `green`);
// colorMixer.mix(`yellow`, `yellow`);
// colorMixer.mix(`yellow`, `blue`);
// colorMixer.mix(`blue`, `red`);
// colorMixer.mix(`blue`, `green`);
// colorMixer.mix(`blue`, `yellow`);
// colorMixer.mix(`blue`, `blue`);
colorMixer.mix();
console.log(``);

//task 18
let tempConverter = {
  celsius: 10,
  fahrenheit: this.celsius * (9 / 5) + 32,
  setC: function (temp) {
    this.celsius = temp;
    this.fahrenheit = temp * (9 / 5) + 32;
  },
  setF: function (temp) {
    this.fahrenheit = temp;
    this.celsius = ((temp - 32) * 5) / 9;
  },
  getC: function () {
    return this.celsius;
  },
  getF: function () {
    return this.fahrenheit;
  },
};
tempConverter.setC(0);
console.log(`task 18: c: ${tempConverter.getC()}, f: ${tempConverter.getF()}`);
tempConverter.setF(0);
console.log(`task 18: c: ${tempConverter.getC()}, f: ${tempConverter.getF()}`);
console.log(``);

//task 19
let pet = {
  name: `berry`,
  type: `cat`,
  hunger: 10,
  happiness: 5,
  feed: function () {
    this.hunger--;
  },
  playWithPet: function () {
    this.happiness++;
  },
  getStatus: function () {
    return `my ${this.type}, ${this.name} is about ${this.hunger} hungey from 1-10 and about ${this.happiness} happy from 1-10`;
  },
};
console.log(`task 19: ${pet.getStatus()}`);
pet.feed();
console.log(`task 19: ${pet.getStatus()}`);
pet.playWithPet();
console.log(`task 19: ${pet.getStatus()}`);
console.log(``);

//task 20
let quiz = {
  questions: [
    {
      text: `q1`,
      options: [`one`, `two`, `three`, `four`],
      correctAnswer: 2,
    },
    {
      text: `q2`,
      options: [`one`, `two`, `three`, `four`],
      correctAnswer: 0,
    },
    {
      text: `q3`,
      options: [`one`, `two`, `three`, `four`],
      correctAnswer: 1,
    },
    {
      text: `q4`,
      options: [`one`, `two`, `three`, `four`],
      correctAnswer: 3,
    },
  ],
  score: 100,
  askQuestion: function (qIndex) {
    console.log(`task 20: ${this.questions[qIndex].text}?`);
  },
  checkAnswer: function (qIndex, answer) {
    if (this.questions[qIndex].correctAnswer === answer) {
      console.log(`task 20: you nailed it!`);
    } else {
      console.log(
        `task 20: you are stupid, the answer was actually ${
          this.questions[qIndex].options[this.questions[qIndex].correctAnswer]
        }`
      );
    }
  },
};
quiz.askQuestion(0);
quiz.checkAnswer(0, 0);
quiz.checkAnswer(0, 1);
quiz.checkAnswer(0, 2);
quiz.checkAnswer(0, 3);
quiz.askQuestion(1);
quiz.checkAnswer(1, 0);
quiz.checkAnswer(1, 1);
quiz.checkAnswer(1, 2);
quiz.checkAnswer(1, 3);
quiz.askQuestion(2);
quiz.checkAnswer(2, 0);
quiz.checkAnswer(2, 1);
quiz.checkAnswer(2, 2);
quiz.checkAnswer(2, 3);
quiz.askQuestion(3);
quiz.checkAnswer(3, 0);
quiz.checkAnswer(3, 1);
quiz.checkAnswer(3, 2);
quiz.checkAnswer(3, 3);
console.log(``);

//task 21
let inventory = {
  items: [
    {
      name: `sward`,
      quantity: 3,
    },
    {
      name: `knife`,
      quantity: 5,
    },
    {
      name: `blood`,
      quantity: 0,
    },
  ],
  addItem: function (newName, newQuantity) {
    this.items.push({
      name: newName,
      quantity: newQuantity,
    });
  },
  checkStock: function (item) {
    this.items.forEach((currentItem) => {
      if (currentItem.name === item) {
        console.log(`task 21: you have ${currentItem.quantity} of ${item}`);
      }
    });
  },
  removeItem: function (itemName, itemQuantity) {
    let removedQuantity;
    let doesFound = false;
    this.items.forEach((item) => {
      if (item.name === itemName) {
        if (item.quantity > itemQuantity) {
          removedQuantity = itemQuantity;
          item.quantity -= itemQuantity;
        } else {
          removedQuantity = item.quantity;
          item.quantity = 0;
        }
        console.log(
          `task 21: was able to removed ${removedQuantity} from ${itemName}`
        );
        doesFound = true;
      }
    });
    if (!doesFound) {
      console.log(`task 21: was not able to find ${itemName}`);
    }
    this.items = this.items.filter((item) => {
      if (item.quantity <= 0) {
        console.log(
          `task 21: ${item.name} removed from your inventory bc it was empty`
        );
      }
      return item.quantity > 0;
    });
  },
  toString: function () {
    let str = ``;
    this.items.forEach((item) => {
      str += `${item.name}(${item.quantity}); `;
    });
    console.log(`task 21: ${str}`);
  },
};
inventory.toString();
inventory.addItem(`spoon`, 1);
inventory.toString();
inventory.checkStock(`spoon`);
inventory.removeItem(`sward`, 2);
inventory.toString();
inventory.removeItem(`sward`, 2);
inventory.toString();
console.log(``);

//task 22
let dice = {
  sides: 6,
  lastRoll: 4,
  roll: function () {
    this.lastRoll = Math.floor(Math.random() * this.sides) + 1;
    console.log(`task 22: just rolled ${this.lastRoll}`);
  },
};
dice.roll();
dice.roll();
dice.roll();
dice.roll();
dice.roll();
dice.roll();
dice.roll();
dice.roll();
dice.roll();
dice.roll();
dice.roll();
dice.roll();
dice.roll();
console.log(``);

//task 23
let wordCounter = {
  text: `Hello, World!, my name is Liraz, my last name is same as my mom name and her mom name`,
  countWords: function () {
    console.log(
      `task 23: the string "${this.text}" has ${
        this.text.split(` `).length
      } words`
    );
  },
  countCharacters: function (includeSpaces) {
    if (includeSpaces) {
      console.log(
        `task 23: the string "${this.text}" has ${this.text.length} chars, including blackSpaces`
      );
    } else {
      let counter = 0;
      for (let i = 0; i < this.text.length; i++) {
        if (this.text[i] !== ` `) {
          counter++;
        }
      }
      console.log(
        `task 23: the string "${this.text}" has ${counter} chars, not including blackSpaces`
      );
    }
  },
  getFrequentWords: function (n) {
    let str = ``;
    let wordsArr = [];
    this.text.split(` `).forEach((word) => {
      let isNewWord = true;
      wordsArr.forEach((currentElement) => {
        if (
          isNewWord &&
          currentElement[0].toUpperCase() === word.toUpperCase()
        ) {
          isNewWord = false;
          currentElement[1]++;
        }
      });
      if (isNewWord) {
        wordsArr.push([word, 1]);
      }
    });
    wordsArr.sort((w1, w2) => {
      return w2[1] - w1[1];
    });
    console.log(wordsArr);
    for (let i = 1; i <= n; i++) {
      str += `${wordsArr[i][0]}(${wordsArr[i][1]}); `;
    }
    console.log(str);
  },
};
wordCounter.countWords();
wordCounter.countCharacters(true);
wordCounter.countCharacters(false);
wordCounter.getFrequentWords(3);
console.log(``);

//task 24
let calculator = {
  result: 4,
  add: function (n) {
    let str = `${this.result} + ${n} = `;
    this.result += n;
    str += `${this.result}`;
    console.log(`task 24: ${str}`);
  },
  subtract: function (n) {
    let str = `${this.result} - ${n} =  `;
    this.result -= n;
    str += `${this.result}`;
    console.log(`task 24: ${str}`);
  },
  multiply: function (n) {
    let str = `${this.result} * ${n} =  `;
    this.result *= n;
    str += `${this.result}`;
    console.log(`task 24: ${str}`);
  },
  divide: function (n) {
    let str = `${this.result} / ${n} =  `;
    this.result /= n;
    str += `${this.result}`;
    console.log(`task 24: ${str}`);
  },
  clearHistory: function () {
    this.result = 0;
  },
  toString: function () {
    console.log(`task 24: result is ${this.result}`);
  },
};
calculator.toString();
calculator.add(3);
calculator.toString();
calculator.subtract(2);
calculator.toString();
calculator.multiply(3);
calculator.toString();
calculator.divide(5);
calculator.toString();
calculator.clearHistory();
calculator.toString();
console.log(``);

//task 25
let game = {
  playerScore: 10,
  computerScore: 68,
  toString: function () {
    console.log(
      `task 25: you won ${this.playerScore} times. the comp won ${this.computerScore}`
    );
  },
  playTurn: function (choice) {
    switch (Math.floor(Math.random() * 3) + 1) {
      case 1: //comp chose rock
        switch (choice) {
          case 1:
            console.log(`task 25: comp chose ROCK, you chose ROCK, its a tie!`);
            break;
          case 2:
            console.log(`task 25: comp chose ROCK, you chose PAPER, you won!`);
            this.playerScore++;
            break;
          case 3:
            console.log(
              `task 25: comp chose ROCK, you chose SCISSORS, you lost!`
            );
            this.computerScore++;
            break;
        }
        break;
      case 2: //comp chose paper
        switch (choice) {
          case 1:
            console.log(`task 25: comp chose PAPER, you chose ROCK, you lost!`);
            this.computerScore++;
            break;
          case 2:
            console.log(
              `task 25: comp chose PAPER, you chose PAPER, its a tie!`
            );
            break;
          case 3:
            `task 25: comp chose PAPER, you chose SCISSORS, you won!`;
            this.playerScore++;
            break;
        }
        break;
      case 3: //comp chose scissors
        switch (choice) {
          case 1:
            console.log(
              `task 25: comp chose SCISSORS, you chose ROCK, you won!`
            );
            this.playerScore++;
            break;
          case 2:
            console.log(
              `task 25: comp chose SCISSORS, you chose PAPER, tou lost!`
            );
            this.computerScore++;
            break;
          case 3:
            console.log(
              `task 25: comp chose SCISSORS, you chose SCISSORS, its a tie!`
            );
            break;
        }
        break;
    }
  },
};
//1 for rock
//2 for paper
//3 for scissors
game.toString();
game.playTurn(1);
game.toString();
game.playTurn(2);
game.toString();
game.playTurn(3);
game.toString();
game.playTurn(1);
game.toString();
game.playTurn(2);
game.toString();
game.playTurn(3);
game.toString();
game.playTurn(1);
game.toString();
game.playTurn(2);
game.toString();
console.log(``);

//task 26
let bmiCalculator = {
  weight: 80,
  height: 1.85,
  isMetric: true,
  calculate: function () {
    let bmiResult = this.weight / (this.height * this.height);
    bmiResult *= this.isMetric ? 1 : 703;
    let writtenResult;
    if (bmiResult < 18.5) {
      writtenResult = `Underweight`;
    } else if (bmiResult < 25) {
      writtenResult = `Normal weight`;
    } else if (bmiResult < 30) {
      writtenResult = `Overweight`;
    } else {
      writtenResult = `Obesity`;
    }
    console.log(
      `task 26: for a person who weight ${this.weight} ${
        this.isMetric ? `kg` : `lbs`
      } and is ${this.height} ${
        this.isMetric ? `m` : `inches`
      } you are ${writtenResult}`
    );
  },
  setMetricUnits: function (newWeight, newHeight) {
    this.weight = newWeight;
    this.height = newHeight;
    this.isMetric = true;
  },
  setImperialUnits: function (newWeight, newHeight) {
    this.weight = newWeight;
    this.height = newHeight;
    this.isMetric = false;
  },
};
bmiCalculator.calculate();
console.log(``);

//task 27
let timeConverter = {
  seconds: 3700,
  setTime: function (time) {
    this.seconds = time;
  },
  getSeconds: function () {
    console.log(`task 27: the time is ${this.seconds} seconds`);
  },
  getMinutes: function () {
    console.log(
      `task 27: the time is ${Math.floor(this.seconds / 60)} minutes and ${
        this.seconds % 60
      } seconds`
    );
  },
  getHours: function () {
    let remainSeconds, remainMinutes, remainHours;
    remainHours = Math.floor(this.seconds / 3600);
    remainSeconds = this.seconds - 3600 * remainHours;
    remainMinutes = Math.floor(remainSeconds / 60);
    remainSeconds -= remainMinutes * 60;
    console.log(
      `task 27: the time is ${remainHours} hours, ${remainMinutes} minutes and ${remainSeconds} seconds`
    );
  },
};
timeConverter.getSeconds();
timeConverter.getMinutes();
timeConverter.getHours();
console.log(``);

//task 28
let shoppingCart = {
  items: [
    {
      name: `milk`,
      price: `7`,
      quantity: 1,
    },
    {
      name: `bread`,
      price: `10`,
      quantity: 3,
    },
    {
      name: `cookies`,
      price: `21`,
      quantity: 20,
    },
  ],
  total: 100,
  addItem: function (newName, newPrice, newQuantity) {
    this.items.push({ name: newName, price: newPrice, quantity: newQuantity });
    this.calculateTotal();
  },
  toString: function () {
    let str = ``;
    this.items.forEach((item) => {
      str += `${item.name}(${item.quantity}) cost ${item.price}; `;
    });
    console.log(`task 28: ${str}. total is ${this.total}`);
  },
  removeItem: function (itemName) {
    this.items = this.items.filter((item) => {
      return item.name !== itemName;
    });
    this.calculateTotal();
  },
  calculateTotal: function () {
    this.total = 0;
    this.items.forEach((item) => {
      this.total += item.price * item.quantity;
    });
  },
};
shoppingCart.toString();
shoppingCart.calculateTotal();
shoppingCart.toString();
shoppingCart.addItem(`chocolate`, 8, 5);
shoppingCart.toString();
shoppingCart.removeItem(`cookies`);
shoppingCart.toString();
console.log(``);

//task 29
let morseTranslator = {
  alphabet: {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----",
    " ": " ", // Space character maps to space in morse code
  },
  textToMorse: function (txt) {
    let textArr = txt.split("");
    let morseTxt = ``;
    textArr.forEach((letter) => {
      morseTxt += `${this.alphabet[letter.toUpperCase()]} `;
    });
    console.log(`task 29: ${txt} in morse is ${morseTxt}`);
  },
  morseToText: function (morse) {
    let keysArr = Object.keys(this.alphabet);
    let morseArr = morse.split(` `);
    let finatlTxt = ``;
    morseArr.forEach((morseLetter) => {
      for (let i = 0; i < keysArr.length; i++) {
        if (morseLetter === this.alphabet[keysArr[i]]) {
          finatlTxt += keysArr[i];
        }
      }
    });
    console.log(`task 29: ${morse} in text is ${finatlTxt}`);
  },
};
morseTranslator.textToMorse(`hello`);
morseTranslator.morseToText(`.... . .-.. .-.. --- `);
console.log(``);

//task 30
let stopwatch = {
  startTime: 0,
  isRunning: false,
  elapsedTime: 0,
};

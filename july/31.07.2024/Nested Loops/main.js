//task 1
for (let i = 1; i < 4; i++) {
  let line = ``;
  for (let j = 1; j < 4; j++) {
    line += `* `;
  }
  console.log(`task 1: (${i}) ${line}`);
}
console.log(``);

//task 2
for (let i = 0; i < 5; i++) {
  let line = ``;
  for (let j = 0; j < 5; j++) {
    line += `${i + j} `;
  }
  console.log(`task 2: (${i}) ${line}`);
}
console.log(``);

//task 3
for (let i = 1; i < 6; i++) {
  let line = ``;
  for (let j = 1; j <= i; j++) {
    line += `* `;
  }
  console.log(`task 3: (${i}) ${line}`);
}
console.log(``);

//task 4
for (let i = 1; i < 5; i++) {
  let line = ``;
  for (let j = 1; j < 5; j++) {
    line += `${i * j} `;
  }
  console.log(`task 4: (${i}) ${line}`);
}
console.log(``);

//task 5
for (let i = 1; i < 6; i++) {
  let line = ``;
  for (let j = 1; j < 6; j++) {
    if (i < 5 && i > 1) {
      line += j === 1 || j === 5 ? `* ` : `- `;
    } else {
      line += `* `;
    }
  }
  console.log(`task 5: (${i}) ${line}`);
}
console.log(``);

//task 6
let counter = 1;
for (let i = 0; i < 5; i++) {
  let line = ``;
  for (let j = 0; j < 5; j++) {
    line += `${counter++} `;
  }
  console.log(`task 6: (${i}) ${line}`);
}
console.log(``);

//task 7
for (let i = 1; i < 6; i++) {
  let line = ``;
  for (let j = 5 - i; j > 0; j--) {
    line += ` `;
  }
  for (let j = 1; j <= i; j++) {
    line += `${i} `;
  }
  console.log(`task 7: (${i}) ${line}`);
}
console.log(``);

//task 8
for (let i = 0; i < 5; i++) {
  let line = ``;
  for (let j = 0; j < 5; j++) {
    line += `${(i + j) % 2} `;
  }
  console.log(`task 8: (${i}) ${line}`);
}
console.log(``);

//task 9
let oldLine = [];
for (let i = 0; i < 5; i++) {
  let line = ``;
  for (let j = 5 - i; j > 0; j--) {
    line += ` `;
  }
}
console.log(`task 9: `);
console.log(``);

//task 10
console.log(`task 10: `);
console.log(``);

//task 11
console.log(`task 11: `);
console.log(``);

//task 12
console.log(`task 12: `);
console.log(``);

//task 13
console.log(`task 13: `);
console.log(``);

//task 14
console.log(`task 14: `);
console.log(``);

//task 15
console.log(`task 15: `);
console.log(``);

//task 16
console.log(`task 16: `);
console.log(``);

//task 17
console.log(`task 17: `);
console.log(``);

//task 18
console.log(`task 18: `);
console.log(``);

//task 19
console.log(`task 19: `);
console.log(``);

//task 20
console.log(`task 20: `);
console.log(``);

//task 21
console.log(`task 21: `);
console.log(``);

//task 22
console.log(`task 22: `);
console.log(``);

//task 23
console.log(`task 23: `);
console.log(``);

//task 24
console.log(`task 24: `);
console.log(``);

//task 25
console.log(`task 25: `);
console.log(``);

//task 26
console.log(`task 26: `);
console.log(``);

//task 27
console.log(`task 27: `);
console.log(``);

//task 28
console.log(`task 28: `);
console.log(``);

//task 29
console.log(`task 29: `);
console.log(``);

//task 30
console.log(`task 30: `);

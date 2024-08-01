//task 1
for (let i = 0; i < 2; i++) {
  let line = ``;
  for (let j = 0; j < 2; j++) {
    line += `* `;
  }
  console.log(`task 1: (${i}) ${line}`);
}
console.log(``);

//task 2
let counter = 1;
for (let i = 0; i < 2; i++) {
  let line = ``;
  for (let j = 0; j < 2; j++) {
    line += `${counter++} `;
  }
  console.log(`task 2: (${i}) ${line}`);
}
console.log(``);

//task 3
for (let i = 0; i < 3; i++) {
  let line = ``;
  for (let j = 0; j <= i; j++) {
    line += `* `;
  }
  console.log(`task 3: (${i}) ${line}`);
}
console.log(``);

//task 4
for (let i = 0; i < 3; i++) {
  let line = ``;
  for (let j = 0; j < 3; j++) {
    line += `${i + j} `;
  }
  console.log(`task 4: (${i}) ${line}`);
}
console.log(``);

//task 5
for (let i = 1; i < 4; i++) {
  let line = ``;
  for (let j = 1; j < 4; j++) {
    line += `${i * j} `;
  }
  console.log(`task 5: (${i}) ${line}`);
}
console.log(``);

//task 6
for (let i = 1; i < 4; i++) {
  let line = ``;
  for (let j = 1; j < 4; j++) {
    if (i === 2 && j === 2) {
      line += `- `;
    } else {
      line += `* `;
    }
  }
  console.log(`task 6: (${i}) ${line}`);
}
console.log(``);

//task 7
counter = 1;
for (let i = 0; i < 3; i++) {
  let line = ``;
  for (let j = 0; j < 3; j++) {
    line += `${counter++} `;
  }
  console.log(`task 7: (${i}) ${line}`);
}
console.log(``);

//task 8
counter = 2;
for (let i = 1; i < 4; i++) {
  let line = ``;
  for (let j = 1; j < 4; j++) {
    line += `${counter} `;
    counter += 2;
  }
  console.log(`task 8: (${i}) ${line}`);
}
console.log(``);

//task 13
for (let i = 0; i < 4; i++) {
  let line = ``;
  for (let j = 0; j < 4; j++) {
    // line += `${(i + j) % 2 === 0 ? `X` : `O`} `;
    if ((i + j) % 2 === 0) {
      line += `X `;
    } else {
      line += `O `;
    }
  }
  console.log(`task 13: ${line}`);
}

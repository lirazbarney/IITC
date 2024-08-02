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

//task 9
counter = 1;
let str;
for (let i = 0; i < 3; i++) {
  str = `task 9: `;
  for (let j = 0; j <= i; j++) {
    str += `${counter++} `;
  }
  console.log(str);
}
console.log(``);

//task 10
for (let i = 0; i < 3; i++) {
  str = `task 10: `;
  for (let j = 0; j < 3; j++) {
    str += `${counter++ % 2} `;
  }
  console.log(str);
}
console.log(``);

//task 11
for (let i = 0; i < 3; i++) {
  str = `task 11: `;
  for (let j = 0; j < 3; j++) {
    str += `${i} `;
  }
  console.log(str);
}
console.log(``);

//task 12
for (let i = 0; i < 3; i++) {
  str = `task 12: `;
  for (let j = 0; j < 3; j++) {
    str += `${j} `;
  }
  console.log(`${str} (${i})`);
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
console.log(``);

//task 14
counter = 1;
for (let i = 0; i < 4; i++) {
  str = `task 14: `;
  for (let j = 0; j <= i; j++) {
    str += `${counter} `;
    counter += 2;
  }
  console.log(str);
}
console.log(``);

//task 15
for (let i = 0; i < 3; i++) {
  str = `task 15: `;
  for (let j = 0; j < 3; j++) {
    str += `${Math.abs(i - j)} `;
  }
  console.log(str);
}
console.log(``);

//task 16
for (let i = 0; i < 5; i++) {
  str = `task 16: `;
  for (let j = 0; j <= i; j++) {
    if (i === 4) {
      str += `* `;
    } else {
      str += j === 0 || j === i ? `* ` : `- `;
    }
  }
  console.log(str);
}
console.log(``);

//task 17
for (let i = 0; i < 4; i++) {
  str = `task 17: `;
  for (let j = 0; j < 4; j++) {
    str += `${Math.min(i, j)} `;
  }
  console.log(str);
}
console.log(``);

//task 18
for (let i = 0; i < 4; i++) {
  str = `task 18: `;
  for (let j = 0; j < 4; j++) {
    str += `${Math.max(i, j)} `;
  }
  console.log(str);
}
console.log(``);

//task 19
let currentChar = 65;
for (let i = 0; i < 3; i++) {
  str = `task 19: `;
  for (let j = 0; j <= i; j++) {
    str += String.fromCharCode(currentChar++);
  }
  console.log(str);
}
console.log(``);

//task 20
for (let i = 0; i < 3; i++) {
  str = `task 20: `;
  for (let j = 0; j < 3; j++) {
    str += `${i * j} `;
  }
  console.log(str);
}
console.log(``);

//task 21
console.log(`task 21: ---------------------------------------------`);
console.log(``);

//task 22
console.log(`task 22: ---------------------------------------------`);
console.log(``);

//task 23
for (let i = 1; i < 5; i++) {
  str = `task 23: `;
  for (let j = 1; j < 5; j++) {
    str += `${Math.pow(i, j)} `;
  }
  console.log(str);
}
console.log(``);

//task 24
counter = 10;
for (let i = 1; i < 5; i++) {
  str = `task 24: `;
  for (let j = 1; j <= i; j++) {
    str += `${counter--} `;
  }
  console.log(str);
}
console.log(``);

//task 25
for (let i = 1; i < 5; i++) {
  str = `task 25: `;
  for (let j = 1; j < 5; j++) {
    str += `${i * 2 + j} `;
  }
  console.log(str);
}
console.log(``);

//task 26
for (let i = 0; i < 5; i++) {
  str = `task 26: `;
  for (let j = 0; j < 5; j++) {
    if (i === 0 || i === 4) {
      str += `# `;
    } else {
      str += j === 0 || j === 4 ? `# ` : `- `;
    }
  }
  console.log(`${str} (${i})`);
}
console.log(``);

//task 27
for (let i = 0; i < 4; i++) {
  str = `task 27: `;
  for (let j = 0; j < 4; j++) {
    str += `${Math.min(i * j, 5)} `;
  }
  console.log(str);
}
console.log(``);

//task 28
for (let i = 0; i < 5; i++) {
  str = `task 28: `;
  for (let j = 0; j <= i; j++) {
    if (i === 2) {
      break;
    } else {
      str += `* `;
    }
  }
  console.log(str);
}
console.log(``);

//task 29
for (let i = 0; i < 5; i++) {
  str = `task 29: `;
  for (let j = 0; j < 5; j++) {
    str += `${i === j ? 1 : 0} `;
  }
  console.log(str);
}
console.log(``);

//task 30
for (let i = 0; i < 4; i++) {
  str = `task 30: `;
  for (let j = 0; j < 4; j++) {
    str += `${i + j + 1} `;
  }
  console.log(str);
}

// // // // function palindromicNumbers(n) {
// // // //   const paliArr = [1];
// // // //   let isPali = true;
// // // //   for (let i = 2; i < n; i++) {
// // // //     isPali = true;
// // // //     const strNum = i.toString();
// // // //     console.log(i);
// // // //     console.log(strNum);

// // // //     for (let j = 0; j < strNum.length / 2; j++) {
// // // //       if (strNum[j] !== strNum[strNum.length - j - 1]) {
// // // //         isPali = false;
// // // //       }
// // // //     }
// // // //     if (isPali) {
// // // //       paliArr.push(i);
// // // //     }
// // // //   }
// // // //   return paliArr;
// // // // }

// // // // console.log(palindromicNumbers(100)); // [1, 2, 3, ..., 99]

// // // // array.forEach(element => {

// // // // });
// // // let table = [];
// // // for (let i = 1; i <= 10; i++) {
// // //   table[i] = [];
// // //   for (let j = 1; j <= 10; j++) {
// // //     table[i][j] = i * j;
// // //   }
// // // }
// // // console.log(table);

// // let num = 50;
// // while (!isPrime(num)) {
// //   num++;
// // }
// // console.log(num);

// // function isPrime(n) {
// //   for (let i = 2; i <= n / 2; i++) {
// //     if (n % i === 0) {
// //       return false;
// //     }
// //   }
// //   return true;
// // }

// let arr = [2, 3, 4, 5, 6, 7, 8];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   let isPrime = true;
//   for (let j = 2; j <= arr[i] / 2; j++) {
//     if (arr[i] % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) count++;
// }
// console.log(count);

let arr = ["madam", "test", "level", "world"];
let palindromes = [];
for (let i = 0; i < arr.length; i++) {
  let str = arr[i];
  let isPalindrome = true;
  console.log(str);
  for (let j = 0; j < str.length / 2; j++) {
    console.log(`${str[j]}, ${str[str.length - 1 - j]}`);

    if (str[j] !== str[str.length - 1 - j]) {
      isPalindrome = false;
      break;
    }
  }
  if (isPalindrome) {
    palindromes.push(str);
  }
}
console.log(palindromes);

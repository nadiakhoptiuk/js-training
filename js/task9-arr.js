// Завдання 6. Напишіть код, який створює масив елементів, що становлять суму
// відповідних елементів заданих масивів.

var arr2 = [1, 2, 3, 4, 5];
var arr1 = [4, 5, 6];

const newArr = [];
const largerArr = arr1.length >= arr2.length ? arr1 : arr2;
const smallerArr = arr1.length < arr2.length ? arr1 : arr2;

console.log(largerArr);
console.log(smallerArr);
let i = 0;

for (const element of largerArr) {
  if (smallerArr[i]) {
    let sum = element + smallerArr[i];
    newArr.push(sum);
  } else {
    newArr.push(element);
  }

  i += 1;
}

console.log(newArr);

// владислав
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [4, 5, 6];

// const minLength = arr1.length < arr2.length ? arr1.length : arr2.length;
// const maxLength = arr1.length >= arr2.length ? arr1.length : arr2.length;

// const maxArr = arr1.length >= arr2.length ? arr1 : arr2;
// const sumArray = [];

// for (let i = 0; i < minLength; i++) {
//   sumArray.push(arr1[i] + arr2[i]);
// }

// for (let i = minLength; i < maxLength; i++) {
//   sumArray.push(maxArr[i]);
// }

// console.log(sumArray);

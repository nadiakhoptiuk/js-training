// Напишіть функцію union, яка повертає масив, що містить усі елементи arr1,
// які не знаходяться в arr2 і навпаки.

var arr1 = [1, 2, 2, "a"];
var arr2 = [1, 2, 3, 4, "b"];

// function arrayDiff(arr1, arr2) {} // [a,3,4,b]

// function arrayDiff(arr1, arr2) {
//   const result = [];
//   for (const el of arr1) {
//     if (!arr2.includes(el)) {
//       result.push(el);
//     }
//   }
//   for (const el of arr2) {
//     if (!arr1.includes(el)) {
//       result.push(el);
//     }
//   }
//   return result;
// }
// 1 cпосіб
// function arrayDiff(arr1, arr2) {
//   const result = [];

//   const newArr = [...new Set(arr1), ...new Set(arr2)];
//   console.log(newArr);

//   const doubleValue = newArr.filter(
//     (value, index, array) => array.indexOf(value) !== index
//   );

//   newArr.forEach((value) => {
//     return !doubleValue.includes(value) ? result.push(value) : result;
//   });

//   return result;
// }

// console.log(arrayDiff(arr1, arr2));

// 2 спосіб - Максим Кундеев
// function arrayDiff(arr1, arr2) {
//   const newArr = [...new Set(arr1), ...new Set(arr2)];
//   return newArr.filter(
//     (element) => newArr.lastIndexOf(element) === newArr.indexOf(element)
//   );
// }

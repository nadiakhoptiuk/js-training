//Напишіть функцію second_greatest_lowest(arr_num), яка прийматиме масив збережених
//чисел і знаходитиме друге найменше та друге найбільше числа відповідно.

// function second_greatest_lowest(arr_num) {
//   const sortedArray = [...new Set(arr_num)].sort((a, b) => a - b);

//   console.log(sortedArray[1], sortedArray[sortedArray.length - 2]);
// }

// спосіб 2
// function second_greatest_lowest(arr_num) {
//   const newArray = [...arr_num];

//   const min = Math.min(...newArray);
//   const max = Math.max(...newArray);

//   const minIndex = arr_num.indexOf(min);
//   const maxIndex = arr_num.indexOf(max);

//   newArray.splice(minIndex, 1);
//   newArray.splice(maxIndex, 1);

//   console.log(Math.min(...newArray), Math.max(...newArray));
// }

// спосіб 3
// function second_greatest_lowest(arr_num) {
//   const uniqueArray = [...arr_num].filter(
//     (element, index, array) => array.indexOf(element) === index
//   );

//   const sortedArray = uniqueArray.sort((a, b) => a - b);
//   return `${sortedArray[1]}, ${sortedArray[sortedArray.length - 2]}`;
// }

// console.log(second_greatest_lowest([8, 10, 9, 12, 12, 11])); // 9,11

// Як зробити повну копію складного обєкта із вкладеними властивостями.
// const obj1 = {
//   a: 1,
// };

// const obj2 = {
//   a: 1,
// };

// const array = [obj1, obj2];
// console.log(array);

// const newArray = JSON.parse(JSON.stringify(array));
// console.log(JSON.stringify(array));

// console.log(array === newArray);

// console.log(newArray[0] === obj1);

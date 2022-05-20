// Завдання 2. Напишіть код, який перетворює та поєднує всі елементи масиву в одне рядкове значення. Елементи масиву будуть розділені комою. Отримайте результат двома різними методами.

// const vegetables = ["Капуста", "Ріпа", "Редиска", "Морква"];

// спосіб 1
// // function arrayClone(arr) {
// //   const result = vegetables.join(", ");
// //   console.log(result);
// // }

// спосіб 2
// function arrayClone(arr) {
//   let result = "";

//   for (let i = 0; i < arr.length; i += 1) {
//     const addToRes = i === arr.length - 1 ? arr[i] : arr[i] + ", ";

//     result += addToRes;
//   }
//   return result;
// }

// console.log(arrayClone(vegetables));

// Напишіть функцію copyArr(arr), яка копіює масив, не змінюючи оригінал.

// var vegetables = ["Капуста", "Ріпа", "Редиска", "Морква"];

// function copyArr(arr) {
// const newArr = arr;
// return arr === newArr; //true

// const newArr = arr.slice();
// return arr === newArr; //false

// const newArr = arr.concat();
// return arr === newArr; //false

// const newArr = [...arguments];
// console.log(newArr);
// return arr === newArr; //false
// }

// console.log(copyArr(vegetables));

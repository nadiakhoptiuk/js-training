// 1. Підрахувати суму всіх елементів кошика

// const cart = [54, 28, 105, 70, 92, 17, 120];

// const totalPrice = function (array) {
//   let total = 0;

//   for (const price of array) {
//     total += price;
//   }
//   return total;
// };

// // або так, декларація
// // function totalPrice(array) {
// //   let total = 0;
// //   for (const price of array) {
// //     total += price;
// //   }
// //   return total;
// // }
// totalPrice(cart);
// console.log(totalPrice(cart));

// 2. Підрахувати суму всіх парних чисел масива
// const array = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];

// const sumEvenNumbers = function (arr) {
//   let sum = 0;

//   for (const num of arr) {
//     if (num % 2 === 0) {
//       sum += num;
//     }
//     continue;
//   }

//   return sum;
// };

// console.log(sumEvenNumbers(array));

// 3. Скрипт пошуку логіна
// Якщо логіна немає, видати "Користувача з таким логіном не знайдено."
// Якщо знайдено, видати "Вітаємо!"
// const logins = ["aergqpoek", "adrc47awe", "poly1scute", "arxf645awee"];
// const loginToFind = "poly1scute";

// const loginSearch = function (array, value) {
//   const message = array.includes(value)
//     ? "Вітаємо!"
//     : "Користувача з таким логіном не знайдено.";

//   return message;
// };

// console.log(loginSearch(logins, loginToFind));

// 4. Знайти в масиві найменше число, за умови, що числа унікальні.
// const numbers = [51, 18, 13, 85, 19, 24, 7, 2];

// const searchMinNumber = function (array) {
//   let min = array[0];
//   for (const num of array) {
//     if (num < min) {
//       min = num;
//     }
//   }
//   return min;
// };

// console.log(searchMinNumber(numbers));

// 5. Знайти в масиві найбільше число, за умови, що числа унікальні.
// const numbers = [51, 18, 13, 85, 19, 24, 7, 2, 91];

// const searchMaxNumber = function (array) {
//   let max = array[0];
//   for (const num of array) {
//     if (num > max) {
//       max = num;
//     }
//   }
//   return max;
// };

// console.log(searchMaxNumber(numbers));

// 6. Зробити новий рядок, в якому букви нижнього реєстру з вихідного рядка приведені до верхнього, а верхнього - до нижнього.
// const string = "JavaScript";

// const invertedString = function (str) {
//   let newString = "";
//   for (const letter of str) {
//     newString +=
//       letter === letter.toUpperCase()
//         ? letter.toLowerCase()
//         : letter.toUpperCase();
//   }
//   return newString;
// };

// console.log(invertedString(string));

// 7. Адреса сайта (slug)
// const string = "How to upload files to a remote repository";

// const createSlug = function (str) {
//   const newString = str.toLowerCase().split(" ").join("-");
//   return newString;
// };

// console.log(createSlug(string));

// 9. Видалення, заміна
// const dashBoard = [
//   "Карточка-1",
//   "Карточка-2",
//   "Карточка-3",
//   "Карточка-4",
//   "Карточка-5",
//   "Карточка-6",
// ];

// const cardToRemove = "Карточка-5";
// const newCard = "Оновлена карточка";

// dashBoard.splice(dashBoard.indexOf(cardToRemove), 1, newCard);
// console.table(dashBoard);

// dashBoard.splice(dashBoard.indexOf(cardToRemove), 1, newCard, newCard);
// console.table(dashBoard);

// dashBoard.splice(dashBoard.indexOf(cardToRemove), 0, newCard, newCard, newCard);
// console.table(dashBoard);

// 10. Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

// спосіб 1 (чомусь у автоперевірках був не до кінця робочий)
// function getCommonElements(array1, array2) {
//   const lessArray = array1.length <= array2.length ? array1 : array2;
//   console.table(lessArray);

//   const biggerArray = array1.length > array2.length ? array1 : array2;
//   console.table(biggerArray);

//   const newArray = [];
//   for (const num of lessArray) {
//     if (biggerArray.includes(num)) {
//       newArray.push(num);
//       console.log(`newArray: ${newArray}`);
//     }
//   }
//   return newArray;
// }

// console.log(
//   getCommonElements(["Nadia", true, 8, "10"], [3, "Nadia", true, 10])
// );

// спосіб 2
// function getCommonElements(array1, array2) {
//   const newArray = [];

//   for (const value of array1) {
//     if (array2.includes(value)) {
//       newArray.push(value);
//     }
//   }

//   return newArray;
// }

// console.log(
//   getCommonElements(["Nadia", true, 8, "10"], [3, "Nadia", true, 10, 8])
// );

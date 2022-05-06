// 1. Підрахувати суму всіх елементів кошика
// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;
// for (let price of cart) {
//   console.log(price);
//   total += price;
// }
// console.log(`total: ${total}`);

// 2. Підрахувати суму всіх парних чисел масива
// const array = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// console.log(array);

// let total = 0;
// for (const value of array) {
//   if (value % 2) {
//     continue;
//   } else {
//     total += value;
//     console.log(`Парне!`);
//   }
// }
// console.log(total);

// 3. Скрипт пошуку логіна
// Якщо логіна немає, видати "Користувача з таким логіном не знайдено."
// Якщо знайдено, видати "Вітаємо!"
// const logins = ["aergqpoek", "adrc47awe", "poly1scute", "arxf645awee"];
// const loginToFind = "poly1scute";

// const doesInclude = logins.includes(loginToFind);
// let message = "Користувача з таким логіном не знайдено";

// спосіб 1
// for (const value of logins) {
//   if (doesInclude === false) {
//     message = "Користувача з таким логіном не знайдено";
//     continue;
//   }
//   message = "Вітаємо!";
//   break;
// }

// // спосіб 2
// for (const value of logins) {
//   if (doesInclude === true) {
//     message = "Вітаємо!";
//     break;
//   }
// }
// console.log(message);

// спосіб 3
// const result = doesInclude
//   ? "Вітаємо!"
//   : "Користувача з таким логіном не знайдено";
// console.log(result);

// 4. Знайти в масиві найменше число, за умови, що числа унікальні.
// const numbers = [51, 18, 13, 85, 19, 24, 7, 2];
// let min = numbers[0];

// for (const num of numbers) {
//   if (num < min) {
//     min = num;
//   }
// }
// console.log(min);

// 5. Знайти в масиві найбільше число, за умови, що числа унікальні.
// const numbers = [51, 18, 13, 85, 19, 24, 7, 2, 91];

// let max = numbers[0];
// for (const num of numbers) {
//   if (num > max) {
//     max = num;
//   }
// }
// console.log(max);

// 6. Зробити новий рядок, в якому букви нижнього реєстру з вихідного рядка приведені до верхнього, а верхнього - до нижнього.
// const string = "JavaScript";

// let invertedString = "";
// const array = string.split("");
// console.log(array);

// for (const letter of array) {
//   invertedString +=
//     letter === letter.toLowerCase()
//       ? letter.toUpperCase()
//       : letter.toLocaleLowerCase();
// }
// console.log(invertedString);

// 7. Адреса сайта
// const string = "How to upload files to a remote repository";

// let webUrl = string.toLowerCase().split(" ").join("-");
// console.log(webUrl);

// 8. Знайти суму всіх елементів двох масивів
// const array1 = [10, 25, 36];
// const array2 = [32, 12, 6, 21];
// const newArrayFromOld = array1.concat(array2);

// let total = 0;
// for (const num of newArrayFromOld) {
//   total += num;
// }
// console.log(total);

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

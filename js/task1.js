// Завдання 1. Щасливим квитком називають такий квиток із шестизначним номером,
// де сума перших трьох цифр дорівнює сумі останніх трьох.
// Напишіть функцію checkTicket(number), яка перевіряє щасливість квитка.

//checkTicket('005212') === true
//checkTicket('133700') === true
//checkTicket('123032') === false

// function checkTicket(number) {
//   const halfOfNumber = number.length / 2;

//   const firstHalfOfNum = number.slice(0, halfOfNumber);
//   const secondHalfOfNum = number.slice(halfOfNumber);

//   let firstTotal = 0;
//   let secondTotal = 0;

//   for (let i = 0; i < halfOfNumber; i += 1) {
//     firstTotal += Number(firstHalfOfNum[i]);
//     secondTotal += Number(secondHalfOfNum[i]);
//   }

//   return firstTotal === secondTotal;
// }

// console.log(checkTicket("005212"));
// console.log(checkTicket("133700"));
// console.log(checkTicket("123032"));

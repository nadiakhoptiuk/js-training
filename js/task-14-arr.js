// Завдання 3. Користувач вводить багатозначне число через prompt. Напишіть функцію colonOdd(num), яка приймає число num як аргумент і вставляє двокрапку (:) між двома непарними числами.
// Наприклад, якщо вводиться число 55639217, то вихід має бути 5:563:921:7.

// Я
// function colonOdd(num) {
//   const numArr = num.toString().split("");
//   console.log(numArr);

//   let newNum = numArr[0];
//   console.log(newNum);

//   for (let i = 0; i < numArr.length - 1; i += 1) {
//     if (Number(numArr[i]) % 2 !== 0 && Number(numArr[i + 1]) % 2 !== 0) {
//       newNum += ":" + numArr[i + 1];
//       console.log(newNum);
//     } else {
//       newNum += numArr[i];
//     }
//   }

//   return newNum;
// }

// console.log(colonOdd(15684791));

// Владислав
// function colonOdd(num) {
//   let strNum = num.toString();
//   let result = "";

//   for (let i = 0; i < strNum.length - 1; i++) {
//     result += strNum[i];
//     if (Number(strNum[i]) % 2 !== 0 && Number(strNum[i + 1]) % 2 !== 0) {
//       result += ":";
//     }
//   }

//   return result + strNum[strNum.length - 1];
// }

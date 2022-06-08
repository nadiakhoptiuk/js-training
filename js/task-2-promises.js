//  * Є функція, яка генерує випадкові числа від 1 до 4.

//  * Написати функцію, яка повертає проміс.
//  * Зробіть так, щоб згенероване число було затримкою функції setTimeout в секундах.
//  * Оберніть все це в проміс, який у будь-якому разі повертає час затримки (і в resolve, і в reject).
//  * Нехай проміс виконається успішно, якщо згенеровано 1 або 2 (`✅ Resolved after ${delay} sec`), і з помилкою - якщо 3 або 4 (`❌ Rejected after ${delay} sec`).

const getRandomNumber = () => Math.floor(Math.random() * 4) + 1;
const randomNum = getRandomNumber() * 1000;

function createPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomNum <= 2000) {
        resolve(randomNum);
      } else {
        reject(randomNum);
      }
    }, randomNum);
  });
}

function onResolve(num) {
  console.log(`✅ Resolved after ${num} sec`);
}

function onReject(num) {
  console.log(`❌ Rejected after ${num} sec`);
}

createPromise().then(onResolve).catch(onReject);

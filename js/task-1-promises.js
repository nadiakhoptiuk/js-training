/*
* Створити функцію getData, яка приймає два колбеки на випадок успішного виконання завдання (`Ми це зробили, Біллі - ${msg}`) та на випадок помилки (`Кеп, у нас проблема - ${err}`).
 * Завдання повинно випадково виконуватися із затримкою в 1 секунду.
 * Якщо успішно -  передати в колбек '✅ СУПЕР!', якщо ні - '❌ ПОМИЛКА!'

* Переписати на Promise (спочатку з двома колбеками в then, потім з catch)
 * При будь-якому результаті в кінці виводити '🚀 Finished!'
*/

function getData() {
  return new Promise((resolve, reject) => {
    const isSuccess = Math.random() < 0.5;

    setTimeout(() => {
      if (!isSuccess) {
        resolve("✅ СУПЕР!");
      } else {
        reject("❌ ПОМИЛКА!");
      }
    }, 1000);
  });
}

getData().then(onSuccess).catch(onError).finally(onFinal);

function onSuccess(msg) {
  console.log(`Ми це зробили, Біллі - ${msg}`);
}

function onError(err) {
  console.log(`Кеп, у нас проблема - ${err}`);
}

function onFinal() {
  console.log("🚀 Finished!");
}

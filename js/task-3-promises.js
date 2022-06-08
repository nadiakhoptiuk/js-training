//  Methods:

//   Promise.race(array) - повертає перший успішно виконаний або відхилений проміс, зі значенням чи причиною відхилення цього промісу.
//
//   Promise.all(array) - повертає проміс, який виконається тоді, коли будуть успішно виконані всі проміси, або відхилено будь-який з них.
//
//   Promise.allSettled(array) - повертає проміс, який виконується коли всі отримані проміси завершені (успішно виконані або відхилені), міститиме масив результатів отриманих промісів (status і value для успішних, status та reason для неуспішних)
//
//   Promise.any(array) - як тільки один із промісів виконається успішно, метод поверне значення виконаного промісу. Якщо жоден із промісів не завершиться успішно, тоді повернутий Promise буде відхилено

//  Зробіть 3 проміси - по одному для кожного фреймворку з масиву.
// У кожному розташована функція setTimeout із випадковою затримкою від 0 до 2 секунд.
// Зробити так, щоб проміси і резолвилися, і реджектилися випадково.
// Нехай кожен проміс своїм результатом повертає цю затримку та ім'я фреймворку, а при помилці ще й текст помилки 'Promise error'.

const frameworks = ["React", "Vue", "Angular"];

const getRandomDelay = () => Math.ceil(Math.random() * 2000);

function createPromise(framework) {
  return new Promise((resolve, reject) => {
    const delay = getRandomDelay();

    setTimeout(() => {
      if (delay <= 1500) {
        resolve({ delay, framework });
      } else {
        reject({
          delay,
          framework,
          error: "Promise error",
        });
      }
    }, delay);
  });
}

const createPromises = frameworks.map((framework) =>
  createPromise(framework).then(onResolve).catch(onReject)
);

function onResolve({ delay, framework }) {
  console.log(`✅ ${framework} won with ${delay} ms`);
}

function onReject({ delay, framework, error }) {
  console.log(`❌ ${error}! ${framework} rejected in ${delay} ms`);
}

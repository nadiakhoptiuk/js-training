// Відомі результати кожної з чотирьох чвертей баскетбольної зустрічі.
// Потрібно визначити переможця матчу. Перемагає команда, яка
// Набрала більше очок протягом усього матчу.
// Напишіть функцію getWinner(points) повертає номер команди, що перемогла,
// або undefined у випадку нічиєї.

// function getWinner(points) {
//   const obj = { "team 1": 0, "team 2": 0 };
//   const newArr = [];
//   console.log(newArr);

//   for (const el of points) {
//     obj["team 1"] += Number(`${el[0]}${el[1]}`);
//     obj["team 2"] += Number(`${el[3]}${el[4]}`);
//   }

//   if (obj["team 1"] === obj["team 2"]) {
//     return undefined;
//   }

//   const max = Math.max(...Object.values(obj));

//   for (const key in obj) {
//     if (obj[key] === max) {
//       return key;
//     }
//   }
// }

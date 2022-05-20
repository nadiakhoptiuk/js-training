// Завдання 5. Напишіть функцію removeDuplicates(arr), яка повертає масив, у якому видалено повторювані елементи з масиву arr (ігноруйте чутливість до регістру).

const arr = [
  "php",
  "php",
  "css",
  "css",
  "script",
  "script",
  "html",
  "html",
  "java",
];

function removeDuplicates(arr) {
  const newArr = [arr[0]];

  for (const element of arr) {
    if (!newArr.includes(element)) {
      newArr.push(element);
    } else {
      continue;
    }
  }

  return newArr;
}

console.log(removeDuplicates(arr));

// 2 спосіб
// return [...new Set(arr)];

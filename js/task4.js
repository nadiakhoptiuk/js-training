//Напишіть функцію find_longest_word(str), яка приймає рядок як параметр і знаходить
//найдовше слово у рядку.

function find_longest_word(str) {
  const array = str.split(" ");
  const object = {};

  array.forEach((element) => (object[element] = element.length));
  const maxLength = Math.max(...Object.values(object));
  
  

  return object[];
}

console.log(find_longest_word("Web Development Tutorial")); // "Development"
